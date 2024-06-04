const Post = require('./post')
const User = require('./user')

User.hasMany(Post, { as: 'posts' })
Post.belongsTo(User, { as: 'user' })

module.exports = {
    User,
    Post
}