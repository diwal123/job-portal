var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JobTable = new Schema({
  ID: String,
  jobDescription:String,
  company: String 
});

var Table = mongoose.model("Table", JobTable);

module.exports = Table;
