const express = require('express');
const axios = require('axios');
const db = require('../server/models/database');
const router = express.Router();
const bcrypt = require('bcryptjs');

// FastAPI 서버의 URL
const FASTAPI_SERVER_URL = 'http://127.0.0.1:8000/predict/';

router.post('/dataset', async (req, res) => {
    try {
        const { id, audioLink } = req.body; // req.body에서 id와 audioLink 추출

        // FastAPI 서버로 데이터 송신
        const response = await axios.post(FASTAPI_SERVER_URL, {
            id: id,
            // audioLink는 나중에 선혁이랑 통일 시켜야 함
            audioLink: audioLink
        });

        // FastAPI 서버로부터의 응답을 클라이언트에 반환
        res.send(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error sending data to FastAPI server');
    }
});

module.exports = router;
