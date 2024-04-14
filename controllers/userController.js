const { User, Thought } = require('../models/User');

const userController = {
    async getUser(req, res) {
        try{
            const user = await User.find();
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
    
            if (!user) {
                return res.status(404).json({ message: 'Not a valid user' });
            }
    
            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
};

module.exports = userController;