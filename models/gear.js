'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gear = sequelize.define('Gear', {
    item: DataTypes.STRING,
    description: DataTypes.STRING,
    weight: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  Gear.associate = function(models) {
    // associations can be defined here
  };
  return Gear;
};