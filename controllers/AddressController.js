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
        if (!address) {
            return res.status(404).json({error: 'Address not found'});
        }
        return res.json(address);
    },

    async delete(req, res) {
        const {id} = req.params;
        await Address.destroy({where: {id}});
        if (!address) {
            return res.status(404).json({error: 'Address not found'});
        }
        return res.json({message: 'Address deleted successfully'});
    },

    async showAddressesUser(req, res) {
        const {id} = req.params;
        const address = await Address.findByPk(id);
        if (!address) {
            return res.status(404).json({error: 'Address not found'});
        }
        const users = await address.getUsers();
        return res.json(users);
    },

    async showUserAddresses(req, res) {
        const {id} = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({error: 'User not found'});
            }

            const addresses = await user.getAddresses();

            // Inclui mapeamento para filtrar os campos que serão retornados
            const filteredAddresses = addresses.map(({id, street, number}) => ({
                id,
                street,
                number
            }));

            return res.json(filteredAddresses);
        } catch (error) {
            return res.status(500).json({error: error.message});
        }
    },

    async showAddress(req, res) {
        const {id} = req.params;
        const address = await Address.findByPk(id);
        if (!address) {
            return res.status(404).json({error: 'Address not found'});
        }
        return res.json(address);
    },

    async addUser(req, res) {
        const {id} = req.params;
        const {userId} = req.body;
        const address = await Address.findByPk(id);
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        await address.addUser(user);
        return res.json({message: 'User added to address successfully'});
    },

    async removeUser(req, res) {
        const {id} = req.params;
        const {userId} = req.body;
        const address = await Address.findByPk(id);
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        await address.removeUser(user);
        return res.json({message: 'User removed from address successfully'});
    }
};