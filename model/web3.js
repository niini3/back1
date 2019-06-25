/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web3', {
    web2_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'web2',
        key: 'ID'
      }
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'web3'
  });
};
