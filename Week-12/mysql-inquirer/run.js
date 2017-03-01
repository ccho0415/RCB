// Calling module
var mysql = require("mysql");
//Connecting to mysql
var connection = mysql.createConnection({
	host: "localhost",
	port: "8888",
	user: "root",
	password: "root",
	database: "class_demos_db"
});
inquirer.prompt([
  {type: "input",
    name: "database",
    message: "What database do you want to connect to?"}
]).then(function(data){
      var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : data.database,
      });

      //Establishing Connection
	connection.connect(function(err) {
  	if (err) {
    	console.error('error connecting: ' + err.stack);
    return;
  	}
  		console.log('connected as id ' + connection.threadId);
	});

      function selectTable(table){
          connection.query('SELECT * from ' + table, function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results);
          });
      }

      inquirer.prompt([
        {type: "input",
          name: "table",
          message: "What table do you want to select from?"}
      ]).then(function(data){
            selectTable(data.table);

            //connection.end();
      });

});