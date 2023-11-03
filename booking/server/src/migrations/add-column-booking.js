module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('Bookings', 'reason', { type: Sequelize.STRING }),
            queryInterface.addColumn('Bookings', 'forWho', { type: Sequelize.STRING }),
        ])
    },

    down: (queryInterface, Sequelize) => {

    }
};