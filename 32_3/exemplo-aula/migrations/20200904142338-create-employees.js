module.exports = {
  up: async (queryInterface, Sequelize) => {
    const EmployeesTable = queryInterface.createTable('Employees', {
      employee_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });

    return EmployeesTable;
  },

  down: async (queryInterface) => queryInterface.dropTable('Employees'),
};
