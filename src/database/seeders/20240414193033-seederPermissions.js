'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('permissions',[
      {
        name:"cats.list",
        title:"Listar",
        module_name:"Gatos",
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        name:"cats.store",
        title:"Registrar",
        module_name:"Gatos",
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        name:"cats.update",
        title:"Actualizar",
        module_name:"Gatos",
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        name:"cats.delete",
        title:"Eliminar",
        module_name:"Gatos",
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        name:"breeds.list",
        title:"Lista",
        module_name:"Raza",
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        name:"breeds.store",
        title:"Registrar",
        module_name:"Raza",
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        name:"breeds.update",
        title:"Actualizar",
        module_name:"Raza",
        created_at:new Date(),
        updated_at:new Date()
      },
      {
        name:"breeds.delete",
        title:"Eliminar",
        module_name:"Raza",
        created_at:new Date(),
        updated_at:new Date()
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('permissions',null,{});
  }
};
