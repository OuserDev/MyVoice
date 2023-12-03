const express = require('express');
const router = express.Router();
const db = require('../server/models/database');
const path = require('path');
const bcrypt = require('bcryptjs');

router.get('/write', (req, res) => {
    res.sendFile(path.join(__dirname, 'board.htm'));  // 'board.html' 파일의 경로 설정
});

router.post('/board', async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const writer = req.session.username; //프론트에 동적으로 출력
    const file_src = req.body.file_src;

    console.log("제목은 : "+title+"내용은 :  "+content+"인 게시글이 들어왔어요");
    const query = 'INSERT INTO board (title, content, writer,file_src) VALUES ( ?, ?, ?, ?)';
    db.query(query, [title, content,file_src], (err, results) => {
        if (err) {
            throw err;
        }
    })

});

router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM board';
        const results = await db.query(query);
        console.log("결과느은~ ", results[0] );

        // 조회된 결과를 프론트엔드로 전송 (여기서는 JSON 형태로 전송)
        //res.json(results);
        res.render('board', { boards: results[0] });
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/board/:id', async (req, res) => {
    // 특정 ID를 가진 게시글 조회 로직 : R
});

router.put('/board/:id', async (req, res) => {
    // 게시글 수정 로직 : U
});

router.delete('/board/:id', async (req, res) => {
    // 게시글 삭제 로직 : D
});



module.exports = router;