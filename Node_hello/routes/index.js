var express = require("express");
var router = express.Router();

const moment = require("moment");

var todoVO = require("../models/todoModel"); // todoVO 모델 생성

let date = moment(new Date()).format("YY.MM.DD");
let time = moment(new Date()).format("HH:mm");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { date: date, time: time });
});

module.exports = router;
