import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Home from './components/Home/Home.component'
import { initStore } from './redux/store'
import { Provider } from 'react-redux'

import App from './App.container'

const store = initStore()

class NoteTaker extends Component {
    render() {
        return (
            // <View style={styles.container}>
            //     <Text style={styles.welcome}>
            //         Welcome to React Native!
            //     </Text>
            // </View>
            // <Home />
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instruction: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default NoteTaker;