// models/user.js
'use strict';
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

class User extends Model {
    static associate(models) {
        this.hasMany(models.Post, {
            foreignKey: 'userId',
            as: 'posts'
        });
    }
}

User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize,
    modelName: 'User',
});

module.exports = User;
