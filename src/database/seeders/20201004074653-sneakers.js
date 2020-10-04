const data = require('../seeders-data/default-sneakers');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sneakers', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sneakers', null, {});
  },
};
