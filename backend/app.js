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
    secret: 'gunpyo',	// 원하는 문자 입력
    resave: false,
    saveUninitialized: true,
  }))


app.use(cors({
    origin: "*",
    credentials: true,
  }));;

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
