import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Text } from 'native-base';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button rounded primary>
                        <Text onPress={ Actions.initiatetransfer }>Initiate Transfer</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}