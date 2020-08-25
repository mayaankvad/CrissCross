import React from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

import Application from './main'
import { InAppNotificationContainer } from './components/helpers/inAppNotifications'


export default function CrissCross() {
    return (
        <Provider store={store}>
            <StatusBar style="auto" />

            <SafeAreaProvider>
                <InAppNotificationContainer />

                <Application />
            </SafeAreaProvider>

        </Provider>
    );
}
