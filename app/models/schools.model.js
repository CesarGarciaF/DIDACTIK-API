module.exports = (sequelize, Sequelize) => {
  const School = sequelize.define('schools', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
}