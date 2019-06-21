'use strict';
module.exports = (sequelize, DataTypes) => {
  const champion = sequelize.define('champion', {
    champName: DataTypes.STRING,
    lane: DataTypes.STRING,
    role: DataTypes.STRING,
    tier: DataTypes.INTEGER
  }, {});
  champion.associate = function(models) {
    // associations can be defined here
  };
  return champion;
};