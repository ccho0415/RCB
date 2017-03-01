var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "='" + ob[key] + "'");
    }
  }

  return arr.toString();
}

// Object Relational Mapper (ORM)

var orm = {
  all: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      console.log(result);
    });
  },
  create: function(tableInput, cols, vals) {
    var queryString = "INSERT INTO " + tableInput;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  delete: function(table, id){
    var queryString = "DELETE from ?? WHERE id=?"
    connection.query(queryString, [table, id],function(err, result) {
      if (err) {
        throw err;
      }

      console.log(result);
    });
  },
  update: function(table, objColVals, condition) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      console.log(result);
    });
  }
};

module.exports = [orm, connection];






