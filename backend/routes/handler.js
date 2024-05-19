const express = require('express');
const router = express.Router();

router.post('/mood', (req,res) => {
    const { p } = req.body;
    if (typeof p === 'string') {
        const parts = p.split(' ');
        const emotion = parts[1];
        console.log(emotion);
}});

module.exports = router;