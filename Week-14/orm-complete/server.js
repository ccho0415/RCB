var orm = require("./config/orm.js")[0];
var connection = require("./config/orm.js")[1];

// Find all the inventions
orm.all("inventions");
// orm.create("inventions", ['name'], ['shoe untire'])
// orm.update('inventions', {
// 	name: 'antisoggy cereal bowl'
// }, "id = 7")
// orm.delete('inventions', 5); //deletes the invention with an id of 2

connection.end();





