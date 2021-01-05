const express = require('express')
// const response = require('../../network/response')
const router = express.Router();
// const controller = require('./controller')

router.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
module.exports = router 