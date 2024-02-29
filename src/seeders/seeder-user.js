'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com ',
      password: '123456',
      firstName: 'Minh',
      lastName: 'Nhan',
      address: 'vn',
      gender: '1',
      // typeRole: 'ROLE',
      // keyRole: 'R1',
      // roleid: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
