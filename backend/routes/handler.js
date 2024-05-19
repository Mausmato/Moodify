const express = require('express');
const router = express.Router();

router.post('/mood', (req,res) => {
    console.log(req)
})

router.get('/mood', (req,res) => {
    console.log('how tf u get here??')
})

module.exports = router;