const router = require('express').Router();

const {
    getUser,
    getUserId,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);

router.route('/:userId').get(getUserId).put(updateUser).delete(deleteUser);

module.exports = router;
