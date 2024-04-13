const router = require('express').Router();

const {
    getUser,
    getUserId,
    createUser,
    updateUser,
    deleteUser,
} = require('../..controllers/userController');

router.route('/').get(getUsr).post(createUser);

router.route('/:id').get(getUserId).put(updateUser).delete(deleteUser);

module.exports = router;