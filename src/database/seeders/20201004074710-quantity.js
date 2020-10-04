const data = require('../seeders-data/default-quantity');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quantities', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quantities', null, {});
  },
};
