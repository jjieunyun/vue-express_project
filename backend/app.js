var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//vue의 라우터와 연결하기 위한 모듈 설치
const connectHistory = require('connect-history-api-fallback');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//7. 작성한 라우터를 app.js에 가져옴
const memoRouter = require('./routes/memo');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//3.connect-history-api-fallback모듈 사용
//설치 이유 : 모든주소를 vue-router주소로 받음
//모듈 사용
app.use(connectHistory());

//2. public의 index.html을 사용하기 위한 연결 (이미 작성되어있음)
/*
(1) use (express.static())을 통해서 index.html실행
-> public안에 있는 내용들을 확인을 하게 됨 
->화면은 계속해서 vue-router로 작성한 화면만 출력
*/
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//8. 가져온 라우터의 위치와 이름을 연결
// url(/api/memo 를 항상 가지는 주소)와 라우터 이름을 연결
//vue config.js에서 프록시테이블을 추가해줄것이기 때문에
app.use('/api/memo', memoRouter);


module.exports = app;
