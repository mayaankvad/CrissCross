import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Keyboard } from 'react-native'
import { connect } from "react-redux";

import { colors, iconData } from '../../../config'
import CardPanel from '../../helpers/cardPanel'
import InputField from './inputField'
import { updateUserFields } from '../../../redux/actions/user';
import { updateFields } from '../../../network/userCalls'


interface Props {
    navigation: any
    fields: any
    onChangeText: any
}

class Inputs extends Component<Props> {

    onSavePress = () => {
        Keyboard.dismiss()
        updateFields()
    }

    render() {
        let v = this.props.fields
        let update = this.props.onChangeText

        return (
            <ScrollView keyboardDismissMode={"interactive"} keyboardShouldPersistTaps={"never"}>

                <CardPanel>
                    <Text style={styles.instructions}>
                        Any fields filled out here will be shown to those who scan or to those who scan you.
                        Scan someones code to exchange contacts both ways.
                    </Text>
                </CardPanel>


                <SectionSeperator text="Basic" />

                <InputField type={'givenName'} placeholder={"First Name"} name={"firstName"} value={v.firstName} onChange={update} icon={iconData.firstName} />
                <InputField type={'familyName'} placeholder={"Last Name"} name={"lastName"} value={v.lastName} onChange={update} icon={iconData.lastName} />
                <InputField type={"emailAddress"} keyboard={'email-address'} name={"email"} value={v.email} onChange={update} placeholder={"Email"} icon={iconData.email} />
                <InputField type={'telephoneNumber'} keyboard={'phone-pad'} name={"phoneNumber"} value={v.phoneNumber} onChange={update} placeholder={"Phone Number"} icon={iconData.phoneNumber} />
                <InputField placeholder={"Tagline"} name={"tagline"} value={v.tagline} onChange={update} icon={iconData.tagline} />


                <SectionSeperator text="Work" />

                <InputField placeholder={"LinkedIn"} name={"linkedin"} value={v.linkedin} onChange={update} icon={iconData.linkedin} />
                <InputField placeholder={"GitHub"} name={"github"} value={v.github} onChange={update} icon={iconData.github} />
                <InputField placeholder={"Discord"} name={"discord"} value={v.discord} onChange={update} icon={iconData.discord} />


                <SectionSeperator text="Social" />

                <InputField placeholder={"Twitter"} name={"twitter"} value={v.twitter} onChange={update} icon={iconData.twitter} />
                <InputField placeholder={"Instagram"} name={"instagram"} value={v.instagram} onChange={update} icon={iconData.instagram} />
                <InputField placeholder={"Snapchat"} name={"snapchat"} value={v.snapchat} onChange={update} icon={iconData.snapchat} />
                <InputField placeholder={"Facebook"} name={"facebook"} value={v.facebook} onChange={update} icon={iconData.facebook} />



                <TouchableOpacity style={styles.saveButton} onPress={this.onSavePress}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Save</Text>
                </TouchableOpacity>


            </ScrollView >

        )
    }

}


const mapStateToProps = (state, ownProps?) => ({
    navigation: ownProps.navigation,
    fields: state.user.fields
})

const mapDispatchToProps = {
    onChangeText: updateUserFields
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)




function SectionSeperator(props: { text: string }): JSX.Element {
    return (
        <View style={styles.sectionSeperator}>
            <Text style={styles.sectionSeperatorText}>{props.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    instructions: {

    },

    saveButton: {
        backgroundColor: colors.main,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 7,
        padding: 15,
        margin: 50,
        width: 100,

        shadowRadius: 0,
        shadowOpacity: .1,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },

    sectionSeperator: {
        padding: 5,
        paddingHorizontal: 15,
        alignSelf: 'center',

        margin: 10,
        borderRadius: 100,

        backgroundColor: colors.main,
    },
    sectionSeperatorText: {
        color: 'white'
    }
})