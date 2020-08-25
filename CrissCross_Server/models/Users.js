const { ObjectId } = require('mongodb')
const { Users } = require('./init').collections



function UserFunctions() { }


UserFunctions.create = async (apple, google, fields) => {
    var userObj = {
        createdAt: new Date(Date.now()),
        lastLogin: new Date(Date.now()),

        apple: apple,
        google: google,

        fields: {
            firstName: fields.firstName,
            lastName: fields.lastName,
            email: fields.email,
            phoneNumber: null,
            tagline: null,

            twitter: null,
            instagram: null,
            snapchat: null,
            facebook: null,
            github: null,
            discord: null,
        }

    }

    let response = await Users.insertOne(userObj)
    return response.insertedId
}



//#region find

function find() { }

find.byProperty = async (property, value) => {
    let response = await Users.findOne({ [property]: value })

    if (response != null) {
        Users.updateOne({ _id: new ObjectId(response._id) }, { $set: { lastLogin: new Date(Date.now()) } })
    }

    if (!response) {
        return { success: false }
    }

    // hideing private properties
    delete response.apple
    delete response.google
    delete response.active

    return response
}

find.byID = async (_id) => {
    return await find.byProperty('_id', new ObjectId(_id))
}

UserFunctions.find = find

//#endregion


//#region update

function update() { }

update.properties = async (_id, updates) => {
    let response = await Users.updateOne({ _id: new ObjectId(_id) }, { $set: updates })
    return response
}

update.fields = async (_id, fieldUpdates) => {
    let response = await update.properties(_id, { fields: fieldUpdates })
    return response
}

UserFunctions.update = update

//#endregion


module.exports = UserFunctions


