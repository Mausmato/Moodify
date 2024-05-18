const express = require('express');
const router = express.Router();

router.get('/mood', (req,res) => {
    const str = [{
        "name": "matthew",
        "msg": "spotify mans",
        "username": "singeripad"
    }];
    res.end(JSON.stringify(str));
})

router.post('/mood', (req,res) => {
    res.end('NA');
})

module.exports = router;