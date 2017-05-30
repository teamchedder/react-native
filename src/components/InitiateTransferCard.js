import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Form, Input, Item, Picker, Text, Header, Left, Right, Body, Button, Title, Icon } from 'native-base';

const countries = Picker
export default class InitiateTransfer extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Send money from card</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={ Actions.confirmtransfer }>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    {/*<View style={{ backgroundColor: '#ecf0f1', height: 100, borderBottomColor: '#bdc3c7', borderBottomWidth: 1, padding: 15 }}>*/}
                        <Text>Select receiving country</Text>
                        <Picker
                            //supportedOrientations={['portrait','landscape']}
                            //iosHeader="Select one"
                            mode="dropdown"
                            //selectedValue={this.state.selected1}
                            //onValueChange={this.onValueChange.bind(this)}
                            >
                            <Item label="Ghana" value="ghana" />
                            <Item label="Nigeria" value="nigeria" />
                            <Item label="Kenya" value="kenya" />
                        </Picker>
                    
                        <Text>Select receiving bank</Text>
                        <Picker
                            //supportedOrientations={['portrait','landscape']}
                            //iosHeader="Select one"
                            mode="dropdown"
                            //selectedValue={this.state.selected1}
                            //onValueChange={this.onValueChange.bind(this)}
                            >
                            <Item label="ACCESS BANK NIGERIA" value="044" />
                            <Item label="DIAMOND BANK PLC" value="063" />
                            <Item label="ECOBANK NIGERIA PLC" value="050" />
                            <Item label="GTBANK PLC" value="058" />
                        </Picker>
                    
                    <Form>
                        <Item>
                            <Input placeholder="Receiving account number" />
                        </Item>
                        <Item>
                            <Input placeholder="Amount to send" />
                        </Item>
                    </Form>
                    <Button block primary onPress={ Actions.confirmtransfer }>
                        <Text>Confirm Transfer</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}