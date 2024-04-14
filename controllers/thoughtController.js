const { User, Thought } = require('../models');

module.exports = {
    async getThought(req, res) {
        try{
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try {
            const user = await Thought.create(req.body);
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const user = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thoughts) {
                return res.status(404).json({ message: 'Not a valid thought' });
            }
        } catch (err) {
            res.status(500).json(err);
          }
    },
    async updateThought(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate({ _id: req.params.thoughtId });

            if (!thoughts) {
                return res.status(404).json({ message: 'Not a valid thought' });
            }
        } catch (err) {
            res.status(500).json(err);
          }
    },
    async addReaction(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate({ _id: req.params.thoughtId });

            if (!thoughts) {
                return res.status(404).json({ message: 'Not a valid thought' });
            }
        } catch (err) {
            res.status(500).json(err);
          }
    },
    async deleteReaction(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate({ _id: req.params.thooughtId });

            if (!thoughts) {
                return res.status(404).json({ message: 'Not a valid thought' });
            }
        } catch (err) {
            res.status(500).json(err);
          }
    },
};

module.exports = thoughtController;