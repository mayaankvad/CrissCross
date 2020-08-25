const { ObjectId } = require('mongodb')
const { Cards } = require('./init').collections
const UserFunctions = require('./Users')


function CardFunctions() { }


CardFunctions.create = async (scanner, scannee) => {

    let [scannerObj, scanneeObj] = await Promise.all([
        UserFunctions.find.byID(scanner),
        UserFunctions.find.byID(scannee)
    ])

    var cardForScanner = {
        created: new Date(Date.now()),
        for: scanner,
        scannedBy: scanner,

        filterKey: 'ADDED_THEM',

        uid: scannee,

        fields: {
            ...scanneeObj.fields
        }
    }

    var cardForScannee = {
        created: new Date(Date.now()),
        for: scannee,
        scannedBy: scanner,

        filterKey: 'ADDED_ME',

        uid: scanner,

        fields: {
            ...scannerObj.fields
        }
    }

    let response = await Cards.insertMany([cardForScanner, cardForScannee])

    var forScanner = response.ops[0]
    var forScannee = response.ops[1]

    return {
        'forScanner': {
            _id: forScanner._id,
            created: forScanner.created,
            filterKey: forScanner.filterKey,
            fields: {
                firstName: forScanner.fields.firstName,
                lastName: forScanner.fields.lastName,
                tagline: forScanner.fields.tagline,
            },
        },
        'forScannee': {
            _id: forScannee._id,
            created: forScannee.created,
            filterKey: forScannee.filterKey,
            fields: {
                firstName: forScannee.fields.firstName,
                lastName: forScannee.fields.lastName,
                tagline: forScannee.fields.tagline,
            },
        }
    }

}


//#region find

function find() { }

find.for = async (_id, num, offset = 0) => {
    let query = { for: _id }
    let fields = { _id: 1, created: 1, filterKey: 1, "fields.firstName": 1, "fields.lastName": 1, "fields.tagline": 1 }
    let orderBy = { created: -1 }

    let response = await Cards.find(query).project(fields).sort(orderBy).skip(offset).limit(num)
    return await response.toArray()
}

find.detail = async (_id) => {
    let response = await Cards.findOne({ _id: new ObjectId(_id) })
    return response
}

CardFunctions.find = find


//#endregion


CardFunctions.delete = async (ids) => {
    objectIds = ids.map(id => (new ObjectId(id)))

    let response = await Cards.deleteMany({ _id: { $in: objectIds } });
    return response
}





module.exports = CardFunctions
