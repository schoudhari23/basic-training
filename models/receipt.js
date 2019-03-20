'use strict';
module.exports = (sequelize, DataTypes) => {
  const receipt = sequelize.define('receipt', {
    salesTax: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {});
  receipt.associate = function (models) {
    receipt.hasMany(models.order, {
      as: 'orders',
      foreignKey: 'receiptId'
    });
  };
  return receipt;
};