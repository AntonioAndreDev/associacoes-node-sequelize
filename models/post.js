// models/post.js
'use strict';
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class Post extends Model {
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user',
            });
        }
    }

    Post.init({
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Post',
    });

    return Post;
};