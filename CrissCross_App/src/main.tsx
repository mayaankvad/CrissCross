import React, { Component } from 'react'
import { AppLoading } from 'expo';
import { connect } from "react-redux";

import loadApplication from './init'
import { setLoaded } from './redux/actions/general'
import UnauthenticatedApp from './components/unauthenticated/unauthenticatedApp'
import Core from './components/core/core'



interface Props {
    loaded: boolean
    isAuthenticated: boolean
    setLoaded: (value: boolean) => any
}

class Application extends Component<Props> {

    render() {
        if (this.props.loaded) {
            if (this.props.isAuthenticated) {
                return (
                    <Core />
                )
            }

            return (
                <UnauthenticatedApp />
            )
        }

        return (
            <AppLoading
                startAsync={async () => await loadApplication()}
                onFinish={() => this.props.setLoaded(true)}
            />
        )

    }

}


const mapStateToProps = (state, ownProps?) => ({
    loaded: state.general.loaded,
    isAuthenticated: state.user.isAuthenticated
})

const mapDispatchToProps = { setLoaded }

export default connect(mapStateToProps, mapDispatchToProps)(Application)