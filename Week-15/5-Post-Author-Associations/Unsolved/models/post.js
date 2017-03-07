module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  }
    ,{
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          Post.belongsTo(models.Author, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    } 
  );
  return Post;
};
