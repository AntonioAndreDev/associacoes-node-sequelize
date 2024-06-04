// models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Post = require('./post')(sequelize, Sequelize.DataTypes);

const models = {
    User: User,
    Post: Post
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

sequelize.sync().then(() => {
    console.log('All models were synchronized successfully.');
}).catch((error) => {
    console.error('An error occurred while synchronizing models:', error);
});

module.exports = models;