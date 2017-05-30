import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Grid, Row, Item, Picker, Text, Header, Left, Right, Body, Button, Title, Icon, Radio } from 'native-base';

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
                        <Title>Initiate Transfer</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={ Actions.confirmtransfer }>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={{ backgroundColor: '#ecf0f1', height: 100, borderBottomColor: '#bdc3c7', borderBottomWidth: 1, padding: 15 }}>
                    <Text>Select receiving country</Text>
                        <Picker
                            //supportedOrientations={['portrait','landscape']}
                            //iosHeader="Select one"
                            mode="dropdown"
                            //selectedValue={this.state.selected1}
                            //onValueChange={this.onValueChange.bind(this)}
                            >
                            <Item label="Ghana" value="key0" />
                            <Item label="Nigeria" value="key1" />
                            <Item label="Kenya" value="key2" />
                        </Picker>
                    </View>
                    <View style={{ backgroundColor: '#ecf0f1', height: 100, borderBottomColor: '#bdc3c7', borderBottomWidth: 1, padding: 15 }}>
                    <Text>Send money to</Text>
                    <Radio selected={false} />
                    </View>
                </Content>
            </Container>
        )
    }
}