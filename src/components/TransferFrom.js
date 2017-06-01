import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button, Text, Card, CardItem, Icon, Grid, Row } from 'native-base';

const img = require('../assets/chedderlogo2.png');

export default class TransferFrom extends Component {
    render() {
        return (
           
            <Container>
                <Content style={{ backgroundColor: '#ecf0f1'}}>
                    <Grid>
                        <Row  style={{ height: 200 }} >
                            
                            <Icon name='swap' />
                        </Row>
                        <Row  style={{ height: 100 }} ></Row>
                    </Grid>
                    
                    <Button block primary iconLeft
                        onPress={ Actions.initiatetransfercard }
                        style={{ marginHorizontal: 10 }} >
                        {/*<Icon name='account-balance' />*/}
                        <Text>Send from Debit Card</Text>
                    </Button>
                    <View style={{ height: 30}}></View>
                    <Button block primary 
                        onPress={ Actions.initiatetransferaccount } 
                        style={{ marginHorizontal: 10 }} >
                        <Text>Send from Bank Account</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}