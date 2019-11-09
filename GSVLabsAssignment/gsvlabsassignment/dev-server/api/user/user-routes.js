import express from 'express';
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('post.auth - get all users');
});

module.exports = router;