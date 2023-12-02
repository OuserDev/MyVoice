const express = require('express');
const router = express.Router();
const db = require('../server/models/database');
const path = require('path');
const bcrypt = require('bcryptjs');


router.get('/board', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'board.html'));  // 'board.html' 파일의 경로 설정
});

router.post('/board', async (req, res) => {
    // 게시글 생성 로직 : C
});

router.get('/board', async (req, res) => {
    // 모든 게시글 조회 로직 : R
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