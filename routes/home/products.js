const express = require('express');
const router = express.Router();

router.get('/:slug', (req, res) => {
    res.render('products/details', { slug: req.params.slug });
});

module.exports = router;