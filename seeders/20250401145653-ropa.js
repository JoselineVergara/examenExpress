'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ropa', [
      {
        nombre: 'Camisa',
        tipo: 'Superior',
        talla: 'M',
        precio: 10.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Pantalón',
        tipo: 'Inferior',
        talla: 'L',
        precio: 25.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Vestido',
        tipo: 'Femenino',
        talla: 'S',
        precio: 79.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ropa', null, {});
  }
};
