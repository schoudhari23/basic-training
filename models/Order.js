'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    imported: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};