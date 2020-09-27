const mongoose = require("mongoose");
const { model } = require("../models/bbsModel.js");

// RDBMS처럼 사용하기 위해 Schema 생성
var schema = mongoose.Schema;

// todo생성
// Json 데이터 구조로 todoVO table 생성하기 위한 객체 선언
var todoVO = new schema({
  t_check: Boolean,
  t_text: String,
  t_date: String,
  t_time: String,
});

module.exports = mongoose.model("tbl_todo", todoVO);
