"use strict";

module.exports = function(sequelize, DataTypes) {
  // creating a table Task with a column task
  var Task = sequelize.define("Task", {
    task: DataTypes.STRING
  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
      //timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
      //paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: 'tasks',

    classMethods: {
      associate: function(models) {
        // belongs to is inverse to has many. A task only belongs to one person
        Task.belongsTo(models.Person, {
          // when deleted, do a cascading delete -> if you delete a person you delete all tasks associated with the person. (so no orphan tasks)
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Task;
};
