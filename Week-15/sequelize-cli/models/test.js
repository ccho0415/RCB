module.exports = function(sequelize, DataTypes){
  var Model = sequelize.define("Model",{
    name: DataTypes.STRING,    		      
    bio: DataTypes.TEXT             
  });		            	
  return Model;
} 