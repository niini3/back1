const Sequelize = require('sequelize');
  module.exports = function(sequelize, DataTypes) {
    return sequelize.define('web1', {
      a: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      b: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      }
    }, {
      tableName: 'web1'
    });
  };