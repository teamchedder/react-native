import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text } from 'native-base';

export default class GetAccountDetails extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>Get Account Details</Text>
                </Content>
            </Container>
        )
    }
}