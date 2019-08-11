const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require('cors');



//const db = require("./models/boardModel");
const db = require("./src/Components/model");

const PORT = 3001;

var app = express();

app.use(logger("dev"));
app.use(cors());
//app.use(bodyParser.json());

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true,
 parameterLimit: 10000,
 limit: 1024 * 1024 * 10
}));
app.use(bodyParser.json({
    extended: true,
 parameterLimit: 10000,
 limit: 1024 * 1024 * 10
}));

app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/krishna";

mongoose.connect(MONGODB_URI);


app.get("/users", function(req, res) {
  
});



app.get("/users/:roomId", function(req, res) {
  
});


app.post("/add/:ID/:jd/:company", function(req, res) {
 
  var newDoc= new db({ID: req.params.ID, jobDescription: req.params.jd, company: req.params.company})
newDoc.save(function (err, book) {
    if (err) return console.error(err);
    console.log("Saved");
  });

  // db.insert({ roomID: req.params.roomID }, {boardID: req.params.boardID} )
  //   .then(function(response) {
  //     res.json(response);
  //   })
  //   .catch(function(err) {
  //     res.json(err);
  //   });
});





app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
