const UserFunctions = require('../../models/Users')


function UserHelpers() { }


UserHelpers.getUser = async (_id) => {
    return await UserFunctions.find.byID(_id)
}

UserHelpers.updateProperties = async (_id, properties) => {
    return await UserFunctions.update.properties(_id, properties)
}

UserHelpers.updateField = async (_id, fields) => {
    return await UserFunctions.update.fields(_id, fields)
}


module.exports = UserHelpers
