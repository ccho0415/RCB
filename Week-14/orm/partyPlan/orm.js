var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  allParty: function(whatToSelect, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY" + connection.escapeId(orderCol);
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table], function(err, result) {
      console.log(result);
    });
  },
  leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString = "SELECT ?? FROM ?? AS tOne";
    queryString = queryString + " LEFT JOIN ?? AS tTwo";
    queryString = queryString + " ON tOne.?? = tTwo.??";

    console.log(queryString);

    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, result) {
      console.log(result);
    });
  },
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log(result);
    });  
}
};

module.exports = orm