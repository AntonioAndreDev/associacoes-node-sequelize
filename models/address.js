'use strict';
const {
    Model, DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
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