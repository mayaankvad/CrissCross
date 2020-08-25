const { OAuth2Client } = require('google-auth-library')
const UserFunctions = require('../../models/Users')
const client = new OAuth2Client()

const IOS_GOOGLE_CLIENT_ID = process.env.IOS_GOOGLE_CLIENT_ID
const ANDROID_GOOGLE_CLIENT_ID = process.env.ANDROID_GOOGLE_CLIENT_ID


function AuthHelpers() { }


//#region Google

function google() { }

google.verify = async (idToken) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: [IOS_GOOGLE_CLIENT_ID, ANDROID_GOOGLE_CLIENT_ID],
        });

        let payload = ticket.payload

        return {
            uid: payload.sub,
            firstName: payload.given_name,
            lastName: payload.family_name,
            email: payload.email,
        }
    }
    catch (e) {
        console.log(`@ERROR::google.verify`)
        return null
    }
}

AuthHelpers.google = google
//#endregion


//#region Apple

function apple() { }

apple.verify = async (params) => {
    try {
        // @TODO add idtoken verification 
        return {
            uid: params.uid,
            firstName: params.name.first,
            lastName: params.name.last,
        }
    }
    catch (e) {
        console.log(`@ERROR::apple.verify`)
        return null
    }
}

AuthHelpers.apple = apple
//#endregion



AuthHelpers.login = async (params) => {
    let provider, value

    if (params.type == 'google') {
        let googleLogin = await google.verify(params.idToken)

        provider = 'google'
        value = googleLogin
    }

    else if (params.type == 'apple') {
        let appleLogin = await apple.verify(params)

        provider = 'apple'
        value = appleLogin
    }


    let result = await UserFunctions.find.byProperty(provider, value.uid)

    if (result.success != false) {
        return { type: 'existing', userObj: result }
    }

    if (params.type == 'google') {
        let ccUser = await UserFunctions.create(null, value.uid, {
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email
        })

        return { type: 'new', _id: ccUser }
    }

    if (params.type == 'apple') {
        let ccUser = await UserFunctions.create(value.uid, null, {
            firstName: value.firstName,
            lastName: value.lastName,
        })

        return { type: 'new', _id: ccUser }
    }
}



module.exports = AuthHelpers
