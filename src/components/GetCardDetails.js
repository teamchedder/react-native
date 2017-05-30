import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Form, Input, Item, Button } from 'native-base';

export default class GetCardDetails extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>Get Card Details</Text>
                    <Form>
                        <Item>
                            <Input placeholder="First Name" />
                        </Item>
                        <Item>
                            <Input placeholder="Last Name" />
                        </Item>
                        <Item>
                            <Input placeholder="Billing Address" />
                        </Item>
                        <Item>
                            <Input placeholder="Phone Number" />
                        </Item>
                        <Item>
                            <Input placeholder="Card Number" />
                        </Item>
                        <Item>
                            <Input placeholder="Expiry Year" />
                        </Item>
                        <Item>
                            <Input placeholder="Expiry Month" />
                        </Item>
                        <Item>
                            <Input placeholder="CVV" />
                        </Item>
                    </Form>
                    <Button block primary onPress={ Actions.initiatetransfercard }>
                        <Text>Send from Card</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}