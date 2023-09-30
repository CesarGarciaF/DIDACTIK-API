module.exports = (sequelize, Sequelize) => {
  const Group = sequelize.define('groups', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    grade: {
      type: Sequelize.ENUM('1', '2', '3', '4', '5', '6'),
      allowNull: false
    },
    school_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'schools',
        key: 'id'
      }
    }
  });

  Group.associate = function (models) {
    Group.belongsTo(models.School, {
      foreignKey: 'school_id',
      as: 'school'
    });
  }
}