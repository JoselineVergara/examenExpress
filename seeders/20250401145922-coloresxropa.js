'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('coloresxropa', [
      {
        colores_id_color: 1,
        ropa_id_ropa: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        colores_id_color: 2,
        ropa_id_ropa: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        colores_id_color: 3,
        ropa_id_ropa: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        colores_id_color: 4,
        ropa_id_ropa: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        colores_id_color: 5,
        ropa_id_ropa: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        colores_id_color: 6,
        ropa_id_ropa: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('coloresxropa', null, {});
  }
};
