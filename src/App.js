import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedIn: false
    }; 

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

        // figuring out whether or not the user has just signed in or out
        // decide which screen to display to a user dependent on auth
        firebase.auth().onAuthStateChanged( (user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button>
                    Log Out
                </Button>
            );
        }

        return <LoginForm />
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