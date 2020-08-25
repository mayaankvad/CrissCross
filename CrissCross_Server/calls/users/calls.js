const express = require('express')
const UserHelpers = require('./helpers')
const router = express.Router()



router.post('/profile/', (request, response) => {
    UserHelpers.getUser(request.body._id)
        .then(val => {
            response.status(200).send(val)
        })
        .catch(err => {
            response.status(400).send({ success: false })
        })
})


router.post('/update/field/', (request, response) => {
    UserHelpers.updateField(request.body._id, request.body.fields)
        .then(val => {
            response.status(200).send({ success: true })
        })
        .catch(err => {
            response.status(400).send({ success: false })
        })
})


router.post('/update/properties/', (request, response) => {
    UserHelpers.updateProperties(request.body._id, request.body.properties)
        .then(val => {
            response.status(200).send({ success: true })
        })
        .catch(err => {
            response.status(400).send({ success: false })
        })
})




module.exports = router;