const express = require('express')
const router = express.Router()


router.get('/socket.io/', (req, res) => {
    res.send({ response: "on" }).status(200)
})

router.post('/socket.io/', (req, res) => {
    res.send({ response: "on" }).status(200)
})


module.exports = router
