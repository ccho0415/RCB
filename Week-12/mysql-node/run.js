// Calling module
var mysql = require("mysql");
//Connecting to mysql
var connection = mysql.createConnection({
	host: "localhost",
	port: "8889",
	user: "root",
	password: "root",
	database: "class_demos_db"
});
//Establishing Connection
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
// Select the Table
function selectTable(table){
	connection.query("SELECT * FROM "+ table, function(error, results, fields){
		if (error) throw error;
		console.log("The result is:", results);
	});
}
// Insert into Table
function insertInto(name, cats, table){
  connection.query("INSERT INTO " + table + " SET ?", {
      name: name,
      cat: cats
    }, function(err, res) { console.log('completed!')});;
}
// Update Table
function updateTable(id, table){
	connection.query("UPDATE"+ table +" SET ? WHERE ?",[{
		name: "meow meow"
	},{
		id:id
	}],function(err,res){console.log("update finished")});
}
// Delete from Table
function deleteTable(id, table){
	connection.query("DELETE FROM"+ table +"WHERE ?",{
		id: id
	},function(err,res){console.log("deleted")});
}
insertInto('Bob', 'Sam', 'node');
selectTable('node');


// var query = process.argv[2];
// connection.query({
// 	sql:query,
// 	timeout: 40000,
// }, function (error, results, fields){
// 	if(error) console.log(error);
// 	if (results) console.log(results);
// });
// connection.end();