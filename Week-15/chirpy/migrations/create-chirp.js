module.exports={
	up: function(queryInterface, Sequelize){
		return queryInterface
			.createTable('chirps', {
				id: {
					type:Sequelize.INTEGER,
					autoIncrement: true,
					primaryKey: true
				},
				name:Sequelize.STRING,
				chirp: Sequelize.STRING,
				created_at: Sequelize.DATE,
				updated_at: Sequelize.DATE
			});
	},
	down: function(queryInterface, Sequelize){
		return queryInterface
			.dropTable('chirps');
	}

}