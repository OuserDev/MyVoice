const express = require("express");
const path = require('path');
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const session = require('express-session');
const bodyParser = require("body-parser");


const app = express();
require("dotenv").config();

app.use(session({
    secret: 'your_secret_key', // 세션 암호화를 위한 비밀 키
    resave: false, // 세션을 항상 저장할지 결정 (일반적으로 false 권장)
    saveUninitialized: true, // 초기화되지 않은 세션을 저장할지 결정
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 쿠키 유효 기간 (예: 1일)
    }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mainRouter    = require('./routes/main_route');
const authRouter    = require('./routes/auth_route');
const datasetRouter = require('./routes/v_dataset_route');
const boardRouter    = require('./routes/board_route');
const { request } = require("http");

app.use('/', mainRouter);   // localhost:3000/
app.use('/auth', authRouter);   // localhost:3000/auth
app.use('/dataset', datasetRouter);   // localhost:3000/dataset
app.use('/board', boardRouter);   // localhost:3000/board


// 포트넘버 설정
app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
})
