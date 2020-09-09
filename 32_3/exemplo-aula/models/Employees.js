const EmployeesModel = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  Employees.associate = (models) => {
    Employees.hasOne(models.Address, { foreignKey: 'employee_id', as: 'addresses' });
  };

  return Employees;
};

module.exports = EmployeesModel;
