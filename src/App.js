import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    // best time to initialize firebase is before the App.js renders 
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAqSyfltZWpqCLkoXtjhJqkNnuD614tuds',
            authDomain: 'auth-24d43.firebaseapp.com',
            databaseURL: 'https://auth-24d43.firebaseio.com',
            projectId: 'auth-24d43',
            storageBucket: 'auth-24d43.appspot.com',
            messagingSenderId: '237753295928'
        });
    }

    render() {
        return(
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        )
    }
};

export default App;