
let initialState = {
    general: {
        loaded: false,
    },

    user: {
        isAuthenticated: false,
        userId: null,

        fields: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            tagline: "",

            linkedin: "",
            github: "",
            discord: "",

            twitter: "",
            instagram: "",
            snapchat: "",
            facebook: "",
        }

    },

    cards: {
        filter: 'ALL',
        list: []
    }

}


export default initialState