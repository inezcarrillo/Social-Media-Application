const router = require('express').Router();

const {
    getThought,
    getThoughtId,
    createThought,
    updateThought,
    deleteThought,
} = require('../..controllers/thought-controller');

router.route('/').get(getThought).post(createThought);

router.route('/:id').get(getThoguhtId).put(updateThought).delete(deleteThought);

module.exports = router;