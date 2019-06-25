/* jshint indent: 2 */
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credit_document_set_2013', {
    ID: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    DOCUMENT_SOURCE_CHANNEL: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    HUB_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BRANCH_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PRIORITY: {
      type: DataTypes.INTEGER(45),
      allowNull: true
    },
    PRODUCT_TYPE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    MONITOR_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MONITOR_SERVER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CREATOR_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CREATOR_NAME: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CREATOR_GROUP_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CREATOR_GROUP_NAME: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    NOTE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    LAST_UPDATE_USER_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    LAST_UPDATE_USER_NAME: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CURRENT_GROUP_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CURRENT_GROUP_NAME: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CURRENT_OWNER_USER_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CURRENT_OWNER_USER_NAME: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    REMIND_FLAG: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    LOCK_FLAG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASSIGN_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CREATE_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LAST_UPDATE_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RECEIVED_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOCUMENT_SET_STATUS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSINESS_CODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APPLICATION_NO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CUSTOMER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CUSTOMER_ID_TYPE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DATE_OF_BIRTH: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TITLE: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BORROWER_FLAG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NATIONALITY: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    THAI_FIRST_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    THAI_LAST_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ENG_FIRST_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ENG_LAST_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MR_CODE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    DEALER_CODE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    APPLICATION_STATUS: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    AUTO_CREATE_FLAG: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    APPLICANT_TYPE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEQ_NO: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    BANK_FLAG: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    APPLICATION_CHANNEL: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    APPLY_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    APPLY_RECEIVE_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    SALE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VERIFY_FLAG: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    REASON_CODE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    REASON_CODE_DESCRIPTION: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    APP_STATUS_CODE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    APP_STATUS_CODE_DESCRIPTION: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    SEND_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    READ_FLAG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SENDER: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    USER_AGENT: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    RETURN_FLAG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RETURN_NOTE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RETURN_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STATUS: {
      type: Sequelize.VIRTUAL,
      get(){
        console.log('Get in');
        return this.getDataValue('STATUS');
      },
      set : function(value){
        console.log('Set in');
        this.setDataValue('STATUS', value);
      }
    }
  }, {
    tableName: 'credit_document_set_2013'
  });
};
