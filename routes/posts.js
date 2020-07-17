const express = require('express');

const router = express.Router();

router.get('/' , (req,res) => {
    console.log('server running');
        res.send("<h1>Server Running</h1>");
    });

module.exports = router;