'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    imported: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  order.associate = function(models) {
    order.belongsTo(models.receipt, {as : 'receipt', foreignKey:'receiptId'});
  };
  return order;
};