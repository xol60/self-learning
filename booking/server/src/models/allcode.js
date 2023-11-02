'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Allcode.hasMany(models.User, { foreignKey: 'positionId', as: 'positionData' })
      models.Allcode.hasMany(models.Schedule, { foreignKey: 'timeType', as: 'timeData' })
      models.Allcode.hasMany(models.Doctor_Info, { foreignKey: 'paymentId', as: 'paymentData' })
      models.Allcode.hasMany(models.Doctor_Info, { foreignKey: 'provinceId', as: 'provinceData' })
      models.Allcode.hasMany(models.Doctor_Info, { foreignKey: 'priceId', as: 'priceData' })
    }
  };
  Allcode.init({
    keyMap: DataTypes.STRING,
    type: DataTypes.STRING,
    valueEn: DataTypes.STRING,
    valueVi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Allcode',
  });
  return Allcode;
};