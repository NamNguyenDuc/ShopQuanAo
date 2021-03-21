import express from 'express';

const router = express.Router();
router.get('/products', (req, res) => {
    res.json({
        msg: "test compelet",
    })
});

module.exports = router;