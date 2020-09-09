const AddressesModel = (sequelize, DataTypes) => {
  const Addresses = sequelize.define('Addresses', {
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  Addresses.associate = (models) => {
    Addresses.belongsTo(models.Employees, { foreignKey: 'employee_id', as: 'employee' });
  };

  return Addresses;
};

module.exports = AddressesModel;
