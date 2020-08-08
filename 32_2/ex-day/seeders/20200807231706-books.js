'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Lord of the Rings - The Ring Society',
        author: 'J. R. R. Tolkien',
        pageQuantity: 350,
        createdAt: '2020-08-07',
        updatedAt: '2020-08-07'
      },
      {
        title: 'Lord of the Rings - The Two Towers',
        author: 'J. R. R. Tolkien',
        pageQuantity: 375,
        createdAt: '2020-08-07',
        updatedAt: '2020-08-07'
      }
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
