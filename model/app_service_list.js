/* jshint indent: 2 */
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_service_list', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    APP_NAME: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    ENTITY: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    URL: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    DESCRIPTION: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    SERVICE_NAME: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    IP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FILES_UPLOAD: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    STATUS_WEB: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    COLSPAN_APP_NAME: {
      type: Sequelize.VIRTUAL,
      get(){
        //console.log('Get in');
        return this.getDataValue('COLSPAN_APP_NAME');
      },
      set : function(value){
        //console.log('Set in');
        this.setDataValue('COLSPAN_APP_NAME', value);
      }
    },
    COLSPAN_IP: {
      type: Sequelize.VIRTUAL,
      get(){
       // console.log('Get in');
        return this.getDataValue('COLSPAN_IP');
      },
      set : function(value){
        //console.log('Set in');
        this.setDataValue('COLSPAN_IP', value);
      }
    },
    RESPONSE: {
      type: Sequelize.VIRTUAL,
      get(){
        //console.log('Get in');
        return this.getDataValue('RESPONSE');
      },
      set : function(value){
        //console.log('Set in');
        this.setDataValue('RESPONSE', value);
      }
    },
    STATUS_CODE: {
      type: Sequelize.VIRTUAL,
      get(){
        //console.log('Get in');
        return this.getDataValue('STATUS_CODE');
      },
      set : function(value){
        //console.log('Set in');
        this.setDataValue('STATUS_CODE', value);
      }
    }
  }, {
    tableName: 'app_service_list'
  });
};