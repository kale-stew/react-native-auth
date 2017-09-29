import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';

// reusable components
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    };

    // helper method to go down the Sign In Attempt chain for us
    onButtonPress() { 
        const { email, password } = this.state;

        this.setState({ 
            error: '',
            loading: true 
        });

        firebase.auth().signInWithEmailAndPassword( email, password ) // user exists! cool! 
        .then(this.onLoginSuccess.bind( this ))
        .catch( () => { // create new user if user does not exist 
            firebase.auth().createUserWithEmailAndPassword( email, password )
            .then(this.onLoginSuccess.bind( this ))
            .catch(this.onLoginFail.bind( this ));
        });
    }

    // helper method for what comes AFTER a successful login
    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',            
            loading: false
        });
    }

    // helped method for what comes after a failed login
    // replacing the .catch method for our onButtonPress
    onLoginFail() {
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }

    // helper method to switch between Button and Spinner
    // conditional rendering
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        } 
        return (
            <Button onPress={this.onButtonPress.bind( this )}>
                Log in</Button>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                       label="Email"
                       placeholderText="your_email@user.com"
                       value={ this.state.email }
                       onChangeText={ text => this.setState({ email: text }) }
                    />
                </CardSection>

                <CardSection>
                    <Input 
                       label="Password"
                       placeholderText="************"
                       value={ this.state.password }
                       onChangeText={ text => this.setState({ password: text }) }
                       secureTextEntry={ true }
                    />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center',
        padding: 3
    }
}

export default LoginForm;