'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class colores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      colores.belongsToMany(models.ropa, {
        through: 'coloresxropa', // Tabla intermedia
        foreignKey: 'colores_id_color',
      });
    }
  }
  colores.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'colores',
    tableName: 'colores',
  });
  return colores;
};