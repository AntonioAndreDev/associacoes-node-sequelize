// PostController.js
const User = require('../models/user');
const Post = require('../models/post');

module.exports = {
    async index(req, res) {
        try {
            const posts = await Post.findAll({include: {model: User}});
            return res.json(posts);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

    async show(req, res) {
        try {
            const post = await Post.findByPk(req.params.id, {include: {model: User, as: 'user'}});
            if (!post) {
                return res.status(404).json({error: 'Post not found'});
            }
            return res.json(post);
        } catch (error) {
            return res.status(500).json({error: 'Something went wrong'});
        }
    },

    async create(req, res) {
        try {
            const {title, content, userId} = req.body;
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({error: 'User not found'});
            }
            const post = await Post.create({title, content, userId});
            return res.json(post);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

    async update(req, res) {
        try {
            const {title, content, userId} = req.body;
            const post = await Post.findByPk(req.params.id);
            if (!post) {
                return res.status(404).json({error: 'Post not found'});
            }
            post.title = title;
            post.content = content;
            post.userId = userId;
            await post.save();
            return res.json(post);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

    async delete(req, res) {
        try {
            const post = await Post.findByPk(req.params.id);
            if (!post) {
                return res.status(404).json({error: 'Post not found'});
            }
            await post.destroy();
            return res.json({message: 'Post deleted successfully'});
        } catch (error) {
            return res.status(500).json({error: 'Something went wrong'});
        }
    }
};
