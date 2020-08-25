const express = require('express')
const AuthHelpers = require('./helpers')
const router = express.Router()


router.post('/login/', (request, response) => {
    AuthHelpers.login(request.body)
        .then(val => {
            response.status(200).send(val)
        })
        .catch(err => {
            response.status(400).send({ success: false })
        })
})


module.exports = router;