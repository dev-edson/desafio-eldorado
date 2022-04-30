'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { category_name: 'Dispositivo de Entrada.' },
      { category_name: 'Dispositivo Intermediário.' },
      { category_name: 'Dispositivo de Ponta.' }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
