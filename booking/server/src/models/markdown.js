'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Markdown extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Markdown.belongsTo(models.User, { foreignKey: 'doctorId' })
        }
    };
    Markdown.init({
        contentDescription: DataTypes.STRING,
        contentQuill: DataTypes.STRING,
        doctorId: DataTypes.INTEGER,
        positionId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Markdown',
    });
    return Markdown;
};