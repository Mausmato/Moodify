const express = require('express');
const router = express.Router();

router.post('/mood', (req,res) => {
    const str = [{
        "name": "matthew",
        "msg": "spotify mans",
        "username": "singeripad"
    }];
    res.end(JSON.stringify(str));
})

router.get('/mood', (req,res) => {
    console.log('how tf u getffhere??')
})

module.exports = router;