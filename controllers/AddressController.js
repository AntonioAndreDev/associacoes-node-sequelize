const Address = require("../models").Address
const User = require("../models").User

module.exports = {
    async create(req, res) {
        const {street, number} = req.body;
        const address = await Address.create({street, number});
        return res.json(address);
    },

    async index(req, res) {
        const addresses = await Address.findAll();
        return res.json(addresses);
    },

    async update(req, res) {
        const {id} = req.params;
        const {street, number} = req.body;
        const address = await Address.update({street, number}, {where: {id}});
        return res.json(address);
    },

    async delete(req, res) {
        const {id} = req.params;
        await Address.destroy({where: {id}});
        return res.json({message: 'Address deleted successfully'});
    },

    async show(req, res) {
        const {id} = req.params;
        const address = await Address.findByPk(id);
        if (!address) {
            return res.status(404).json({error: 'Address not found'});
        }
        const users = await address.getUsers();
        return res.json(users);
    },

    async addUser(req, res) {
        const {id} = req.params;
        const {userId} = req.body;
        const address = await Address.findByPk(id);
        const user = await User.findByPk(userId);
        await address.addUser(user);
        return res.json({message: 'User added to address successfully'});
    },

    async removeUser(req, res) {
        const {id} = req.params;
        const {userId} = req.body;
        const address = await Address.findByPk(id);
        const user = await User.findByPk(userId);
        await address.removeUser(user);
        return res.json({message: 'User removed from address successfully'});
    }
};