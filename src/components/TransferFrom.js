import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Text } from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button block primary onPress={ Actions.initiatetransfercard }>
                        <Text>Send from Debit Card</Text>
                    </Button>
                    <Button block primary onPress={ Actions.initiatetransferaccount }>
                        <Text>Send from Bank Account</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}