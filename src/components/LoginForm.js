import React, { Component } from 'react';
import { View } from 'react-native';

// reusable components
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    render() {
        return(
            <Card>
                <CardSection />
                <CardSection />
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;