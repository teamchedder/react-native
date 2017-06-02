import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Text, Card, CardItem, Icon, Grid, Row } from 'native-base';

const img = require('../assets/home.png');

export default class TransferFrom extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Angus Brown'
        }
    }
    render() {
        return (
           
            <Container>
                
                    <Image source={img} style={{ flex: 1, width: null, height: null }}>
                        <View style={{flex: 1, paddingTop: 20, paddingLeft: 10, paddingRight: 10, paddingBottom: 30, bottom: 0, marginTop: 350 }}>
                    <Button block  iconLeft
                        onPress={ Actions.initiatetransfercard }
                        style={{ marginHorizontal: 10, backgroundColor: '#00aef0' }} >
                       <Icon name='card'/>
                        <Text>Send from Debit Card</Text>
                    </Button>
                    <View style={{ height: 30}}></View>
                    <Button block iconLeft
                        onPress={ Actions.initiatetransferaccount } 
                        style={{ marginHorizontal: 10, backgroundColor: '#00a651' }} >
                        <Icon name='home'/>
                        <Text>Send from Bank Account</Text>
                    </Button>
                    </View>
                    </Image>
               
            </Container>
        )
    }
}