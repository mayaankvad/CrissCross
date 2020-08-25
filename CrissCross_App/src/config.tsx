export const DEBUG = true


export const colors = {
    main: '#d81b60',
    darkgrey: '#546e7a',
    lightgrey: 'lightgrey',

    notification: {
        text: 'green',
        errorText: 'red',
    },

    social: {
        twitter: '#1DA1F2',
        instagram: '#C13584',
        snapchat: '#FFFC00',
        facebook: '#3b5998',
        linkedin: '#2867B2',
        github: 'black',
        discord: '#7289DA'
    },

    colorList: [
        "#ff1744",
        "#6a1b9a",
        "#3f51b5",
        "#009688",
        "#e64a19",
        "#29b6f6",
        "#01579b",
        "#4caf50",
        "#006064",
        "#f57f17",
        "#e65100",
        "#d84315",
        "#ec407a",
        "#aa00ff",
        "#1565c0",
        "#ef5350",
        "#004d40",
        "#4527a0",
        "#fbc02d",
        "#ef6c00",
    ]
}


export const iconData = {
    firstName: { name: 'md-person', set: 'Ionicons' },
    lastName: { name: 'md-person', set: 'Ionicons' },
    email: { name: 'md-mail', set: 'Ionicons' },
    phoneNumber: { name: 'phone', set: 'FontAwesome' },
    tagline: { name: 'pencil', set: 'FontAwesome' },

    linkedin: { name: 'linkedin', color: colors.social.linkedin, set: 'FontAwesome5' },
    github: { name: 'github', color: colors.social.github, set: 'FontAwesome5' },
    discord: { name: 'discord', color: colors.social.discord, set: 'FontAwesome5' },

    twitter: { name: 'twitter', color: colors.social.twitter, set: 'FontAwesome' },
    instagram: { name: 'instagram', color: colors.social.instagram, set: 'FontAwesome' },
    snapchat: { name: 'snapchat-ghost', color: colors.social.snapchat, set: 'FontAwesome' },
    facebook: { name: 'facebook-f', color: colors.social.facebook, set: 'FontAwesome' },
}


export const asyncKeys = {
    USERID: '@userId'
}


export const googleSignInConfig = {
    iosClientId: "653921294228-ikll8hr82oqf4ar0ahkuqi25601t192p.apps.googleusercontent.com",
    androidClientId: "653921294228-fcqc1puccd3e3h18bj22c4pfl84ud808.apps.googleusercontent.com",
    iosStandaloneAppClientId: "<YOUR_IOS_CLIENT_ID>",
    androidStandaloneAppClientId: "<YOUR_ANDROID_CLIENT_ID>",
}
