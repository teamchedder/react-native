import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text } from 'native-base';

export default class InitiateTransferAccount extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>Initiate Transfer From Account</Text>
                </Content>
            </Container>
        )
    }
}