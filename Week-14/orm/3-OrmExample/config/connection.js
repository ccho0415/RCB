var mysql = require("mysql");

var password = "nodeuser";
var connection = mysql.createConnection({
  host: "localhost",
  user: "nodeuser",
  password: password,
  database: "pets_db"
});


var otherConnection = mysql.createConnection({
  host: "localhost",
  user: "blah",
  password: "blah",
  database: "pets_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
