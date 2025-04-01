'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coloresxropa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coloresxropa.init({
    colores_id_color: DataTypes.INTEGER,
    ropa_id_ropa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'coloresxropa',
    tableName:'coloresxropa',
  });
  return coloresxropa;
};