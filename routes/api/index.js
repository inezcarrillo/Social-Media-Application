const router = require('express').Router();
const userRoute = require('./user-routes');
const thoughtRoute = require('./thought-routes');

router.use('./user-routes', userRoute);
router.use('./thought-routes', thoughtRoute);

router.use((req, res) => {
    return res.send('Wrong routes');
});

module.exports = router;
