'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Address extends Model {
        static associate(models) {
            this.belongsToMany(models.User, {
                through: 'UserAddress',
                as: 'users',
                foreignKey: 'addressId'

            })
        }
    }

    Address.init({
        street: DataTypes.STRING,
        number: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'Address',
    });
    return Address;
};