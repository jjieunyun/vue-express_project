var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  // public에 있는 index.html 파일에 접근
  // res.send("히스토리모드가 아닙니다");
  //res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = router;