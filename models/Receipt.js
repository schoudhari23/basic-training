'use strict';
module.exports = (sequelize, DataTypes) => {
  const Receipt = sequelize.define('Receipt', {
    salesTax: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {});
  Receipt.associate = function(models) {
    // associations can be defined here
  };
  return Receipt;
};