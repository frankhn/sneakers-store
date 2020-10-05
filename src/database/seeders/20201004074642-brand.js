const data = require('../seeders-data/default-brand');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brands', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brands', null, {});
  },
};
