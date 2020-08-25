const express = require('express')
const router = express.Router()
const CardHelpers = require('./helpers')



router.post('/create/', (request, response) => {
    var body = request.body

    CardHelpers.create(body.scanner, body.scanee)
        .then(val => {
            var returnObj = { success: true, card: val }
            response.status(200).send(returnObj)
        })
        .catch(err => {
            response.status(400).send({ success: false })
        })
})


router.post('/find/', (request, response) => {
    var body = request.body

    CardHelpers.findList(body._id, body.offset)
        .then(val => {
            var returnObj = { success: true, cards: val }
            response.status(200).send(returnObj)
        })
        .catch(err => {
            response.status(400).send({ success: false })
        })
})


router.post('/detail/', (request, response) => {
    var body = request.body

    CardHelpers.findDetail(body._id)
        .then(val => {
            var returnObj = { success: true, card: val }
            response.status(200).send(returnObj)
        })
        .catch(err => {
            response.status(400).send({ success: false })
        })
})

router.post('/delete/', (request, response) => {
    var body = request.body

    CardHelpers.delete(body.ids)
        .then(val => {
            var returnObj = { success: true }
            response.status(200).send(returnObj)
        })
        .catch(err => {
            response.status(400).send({ success: false })
        })
})



module.exports = router;