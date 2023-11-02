'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_Info extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Doctor_Info.belongsTo(models.Allcode, { foreignKey: 'paymentId', targetKey: 'keyMap', as: 'paymentData' })
            models.Doctor_Info.belongsTo(models.Allcode, { foreignKey: 'provinceId', targetKey: 'keyMap', as: 'provinceData' })
            models.Doctor_Info.belongsTo(models.Allcode, { foreignKey: 'priceId', targetKey: 'keyMap', as: 'priceData' })
        }
    };
    Doctor_Info.init({
        doctorId: DataTypes.INTEGER,
        paymentId: DataTypes.STRING,
        provinceId: DataTypes.STRING,
        priceId: DataTypes.STRING,
        clinicName: DataTypes.STRING,
        clinicAddress: DataTypes.STRING,
        note: DataTypes.STRING,
        count: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Doctor_Info',
    });
    return Doctor_Info;
};