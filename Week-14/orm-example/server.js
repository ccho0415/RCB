var orm = require("./config/orm.js");

// Find all the inventions
orm.all("inventions");
orm.create("inventions", ['name'], ['shoe untire'])
orm.update('inventions', {
	name: 'antisoggy cereal bowl'
}, "id = 7")