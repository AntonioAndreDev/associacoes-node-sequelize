'use strict';
const {
    Model, DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
    class UserAddress extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    UserAddress.init({
        userId: DataTypes.INTEGER,
        addressId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'UserAddress',
    });
    return UserAddress;
};