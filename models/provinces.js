'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class provinces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  provinces.init({
    name: DataTypes.STRING,
    governor: DataTypes.STRING,
    population: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'provinces',
  });
  return provinces;
};