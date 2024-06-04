// models/user.js
'use strict';
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.Post, {
                foreignKey: 'userId',
                as: 'posts',
            });

            this.belongsToMany(models.Address, {
                through: 'UserAddress',
                foreignKey: 'userId',
                as: 'addresses',
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

    return User;
};