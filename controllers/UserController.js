const User = require('../models/user');

module.exports = {
    async create(req, res) {
        const {name, email, password} = req.body;
        try {
            const user = await User.create({name, email, password});
            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },
    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },
    async show(req, res) {
        const {id} = req.params;
        try {
            const user = await User.findByPk(id, {
                attributes: ['id', 'name', 'email']
            });
            if (!user) {
                return res.status(404).json({error: 'user not found'});
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },
    async update(req, res) {
        const {id} = req.params;
        const {name, email, password} = req.body;
        try {
            const user = await user.findByPk(id);
            if (!user) {
                return res.status(404).json({error: 'user not found'});
            }
            await user.update({name, email, password});
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },
    async delete(req, res) {
        const {id} = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({error: 'user not found'});
            }
            await user.destroy();
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },
}