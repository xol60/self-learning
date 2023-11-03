'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Doctor_Infos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            doctorId: {
                type: Sequelize.INTEGER
            },
            priceId: {
                type: Sequelize.STRING
            },
            paymentId: {
                type: Sequelize.STRING
            },
            provinceId: {
                type: Sequelize.STRING
            },
            clinicName: {
                type: Sequelize.STRING
            },
            clinicAddress: {
                type: Sequelize.STRING
            },
            note: {
                type: Sequelize.STRING
            },
            count: {
                type: Sequelize.INTEGER
            },
            clinicId: {
                type: Sequelize.INTEGER
            },
            specialtyId
                : {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });

    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Doctor_Infos');
    }
};