'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coloresxropa', {
      colores_id_color: {
        type: Sequelize.INTEGER,
        references: {
          model: 'colores', // Nombre de la tabla referenciada
          key: 'id' // Nombre de la columna referenciada
        },
      },
      ropa_id_ropa: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ropa', // Nombre de la tabla referenciada
          key: 'id' // Nombre de la columna referenciada
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('coloresxropa');
  }
};