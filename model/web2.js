const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('web2', {
        create_date: {
            type: DataTypes.DATE,
            allowNull: false
          },
          create_by: {
            type: DataTypes.STRING,
            allowNull: false
          },
        name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ID: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
 
    }, {
      tableName: 'web2'
    });
  };