"use strict";

module.exports = {
  async up(queryInterface, sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable("users", {
      UserID: {
        type: sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      FullName: {
        type: sequelize.STRING(50),
        allowNull: false,
        autoIncrement: false,
      },
      Email: {
        type: sequelize.STRING(50),
        allowNull: false,
      },
      password: {
        type: sequelize.STRING(50),
        allowNull: false,
      },
      role: {
        type: sequelize.STRING(50),
        allowNull: false,
      },
      CreatedAt: sequelize.DATE,
      updatedAt: sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("users");
  },
};
