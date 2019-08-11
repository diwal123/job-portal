var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JobTable = new Schema({
  Title: {
    type: String,
    required: [true, "Please add Title"]
  },
  Location: {
    type: String,
    required: [true, "Please add Location"]
  },
  Type: {
    type: String,
    required: [true, "Please add Type"]
  },
  Education: {
    type: String,
    required: [true, "Please add Education"]
  },
  Experience: {
    type: Number,
    required: [true, "Please add Experience"]
  },

  Company: String
});

var Table = mongoose.model("Table", JobTable);

module.exports = Table;
