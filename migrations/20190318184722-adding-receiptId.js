'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'orders',
      'receiptId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'receipts',
          key: 'id'
        }
      }
    )

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'orders',
      'receiptId'
    )

  }
};
