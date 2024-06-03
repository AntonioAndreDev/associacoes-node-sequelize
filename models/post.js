// models/post.js
'use strict';
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

class Post extends Model {
    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    }
}

Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Post',
});

module.exports = Post;
