const router = require('express').Router();

const {
    getThought,
    getThoughtId,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../..controllers/thought-controller');

router.route('/').get(getThought).post(createThought);

router.route('/:id').get(getThoughtId).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reaction').post(addReaction);

router.route('/:thoughtId/reaction/reactionId').delete(deleteReaction);

module.exports = router;