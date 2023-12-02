const express = require('express');
const router = express.Router();
const db = require('../server/models/database');
const path = require('path');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'board.html')); // 'index.html' 파일의 경로를 설정하세요.
});

router.post('/register', async (req, res) => {
    try {
        const username = req.body.id;
        const password = req.body.pw;
        const confirm_password = req.body.repass;
        const email = req.body.name;

        // 비밀번호 확인
        if (password !== confirm_password) {
            return res.status(400).send('Passwords do not match.');
        }

        // 비밀번호 해시
        const hashedPassword = await bcrypt.hash(password, 10);

        // 데이터베이스에 사용자 정보 저장
        const query = 'INSERT INTO myvoice (username, password, email) VALUES (?, ?, ?)';
        db.query(query, [username, hashedPassword, email], (err, results) => {
            if (err) {
                throw err;
            }

            // 성공적으로 데이터가 저장됐을 때의 응답
            res.send(`User ${username} registered with email ${email}`);
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html')); // 'index.html' 파일의 경로를 설정하세요.
    console.log('get요청은됨');
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // 데이터베이스에서 사용자 검색
        const query = 'SELECT * FROM myvoice WHERE username = ?';
        const [users] = await db.query(query, [username]);

        // 사용자가 존재하지 않으면 에러 처리
        if (users.length === 0) {
            return res.status(401).send('Invalid username or password');
        }

        // 비밀번호 확인
        const user = users[0];
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send('Invalid username or password');
        }

        // 로그인 성공 처리
        res.send('Login successful');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.post('/logout', (req, res) => {
    // 세션을 사용하는 경우 세션 정보를 삭제
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                // 세션 삭제 중 에러 처리
                return res.status(500).send('Logout failed');
            }

            // 로그아웃 성공 처리
            res.send('Logged out successfully');
        });
    } else {
        // JWT 토큰을 사용하는 경우, 클라이언트에서 토큰을 삭제하거나 무효화 처리
        res.send('Logged out successfully');
    }
});

module.exports = router;