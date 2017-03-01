"use strict";

module.exports = function(sequelize, DataTypes) {
    // creating a table Person using sequelize.define with a column name
  var Person = sequelize.define("Person", {
    name: DataTypes.STRING
  }, {
    // different possible properties for the table

    // don't add the timestamp attributes If it is true it will add these columns: updatedAt (record changed), createdAt (record created)
      //timestamps: false,

    // don't delete database entries when deleted at sequelize but set the newly added attribute / column deletedAt
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
    tableName: 'people',

    classMethods: {
      associate: function(models) {
    // It is taking the person object and has many tasks (one to many foreign key relationship declaration)
        Person.hasMany(models.Task)
      }
    }
  });

  return Person;
};
