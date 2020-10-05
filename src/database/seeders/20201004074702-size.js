const data = require('../seeders-data/default-size');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sizes', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sizes', null, {});
  },
};
