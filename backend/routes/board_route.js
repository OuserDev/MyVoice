const express = require('express');
const router = express.Router();
const db = require('../server/models/database');
const path = require('path');
const bcrypt = require('bcryptjs');

router.post('/write', async (req, res) => {
    try {
  
      // 요청에서 제목, 내용, 파일 경로 등 받아오기
      console.log(req.body)
      const title = req.body.title
      const content = req.body.content
      const writer = req.body.writer;

      // 데이터베이스에 게시글 저장
      const query = 'INSERT INTO board (title, content, writer) VALUES (?, ?, ?)';
      const result = await db.query(query, [title, content, writer]);
  
      // 삽입된 게시글의 ID를 확인할 수 있음 (result.insertId)
  
      res.status(200).send('업데이트 성공');
    } catch (error) {
      console.error('게시글 작성 오류:', error);
      res.status(500).send('업데이트 실패');
    }
  });


router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM board';
        const results = await db.query(query);
        console.log("결과느은~ ", results );

        // 조회된 결과를 프론트엔드로 전송 (여기서는 JSON 형태로 전송)
        //res.json(results);
        res.status(200).json(results[0]);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    // 특정 ID를 가진 게시글 조회 로직 : R
    try {
        const id = parseInt(req.params.id);
        console.log(id)
        const query1 = "UPDATE board SET ViewCount = ViewCount + 1 WHERE id = ?";
        const results1 = await db.query(query1, [id]);
        const query = 'SELECT * FROM board WHERE id=?';
        const results = await db.query(query, [id]);
        console.log(results[0])
        console.log("결과느은~ ", results );
        
        // 조회된 결과를 프론트엔드로 전송 (여기서는 JSON 형태로 전송)
        //res.json(results);
        res.status(200).json(results[0]);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/update/:id', async (req, res) => {
    // 특정 ID를 가진 게시글 조회 로직 : R
    try {
        const id = parseInt(req.params.id);
        console.log(id)
        const query = 'SELECT * FROM board WHERE id=?';
        const results = await db.query(query, [id]);
        console.log(results[0])
        
        // 조회된 결과를 프론트엔드로 전송 (여기서는 JSON 형태로 전송)
        //res.json(results);
        res.status(200).json(results[0]);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/update/:id', async (req, res) => {
    // 게시글 수정 로직 : U
    // 특정 ID를 가진 게시글 조회 로직 : R
    try { 
        console.log(req.body)
        const title = req.body.title
        const content = req.body.content
               
        const id = parseInt(req.params.id);
        console.log(id)
        
        const query = "UPDATE board SET title = ?, content = ? WHERE id = ?";
        const results = await db.query(query, [title,content,id]);
        console.log(results[0])
        res.status(200).send('업데이트 성공용');

    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try { 
              
        const id = parseInt(req.params.id);
        console.log(id)
        
        const query = "DELETE FROM board WHERE id = ?";
        const results = await db.query(query, [id]);
        console.log(results[0])
        res.status(200).send('삭제 성공용');
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;