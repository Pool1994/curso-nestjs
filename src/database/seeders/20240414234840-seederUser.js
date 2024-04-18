'use strict';
const bcrypt = require("bcrypt");
const saltOrRounds = 10;
const password = '123456';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        name: "Administrador",
        email: "admin@gmail.com",
        password: await bcrypt.hash(password, saltOrRounds),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Cajero",
        email: "cajero@gmail.com",
        full_access:"NO",
        allow_remove:"YES",
        password: await bcrypt.hash(password, saltOrRounds),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */await queryInterface.bulkDelete('users',null,{});
  }
};
