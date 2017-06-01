import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, List, ListItem, Header, Grid, Col, Row, Left, Right, Body, Button, Icon, Title } from 'native-base';

export default class ConfirmTransfer extends Component {
    constructor(props){
        super(props);
        let data = this.props.navigationState;
        let charges = Math.floor(0.09 * data.totalAmount);
        let rate = 1;
        this.state = {
            receivingCountry: data.receivingCountry,
            receiverName: data.receiver,
            receivingBank: data.recipientBank,
            receivingAccountNumber: data.recipientAccountNumber,
            sendingDescription: data.description,
            receivingAmount: data.totalAmount.toString(),
            receivingRate: rate.toString(),
            sendingCharge: charges.toString(),
            sendingTotal: Math.floor((rate * data.totalAmount) + charges).toString(),
        }

    }

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
                        <Title>Confirm transfer</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Text>Receiving country:</Text>
                    <Text style={{ fontWeight: 'bold' }}>{ this.state.receivingCountry }</Text>
                    <Text>Receiver's name:</Text>
                    <Text style={{ fontWeight: 'bold' }}>{ this.state.receiverName }</Text>
                    <Text>Receiving bank:</Text>
                    <Text style={{ fontWeight: 'bold' }}>{ this.state.receivingBank }</Text>
                    <Text>Receiver's account #:</Text>
                    <Text style={{ fontWeight: 'bold' }}>{ this.state.receivingAccountNumber }</Text>
                    <Text>Description:</Text>
                    <Text style={{ fontWeight: 'bold' }}>{ this.state.sendingDescription }</Text>
                    <Text>Amount to transfer:</Text>
                    <Text style={{ fontWeight: 'bold' }}>{ this.state.receivingAmount }</Text>
                    <Text>Rate:</Text>
                    <Text style={{ fontWeight: 'bold' }}>{ this.state.receivingRate }</Text>
                    <Text>Charges:</Text>
                    <Text style={{ fontWeight: 'bold' }}>{ this.state.sendingCharge }</Text>
                    <Text style={{ fontWeight: 'bold' }}>Total:</Text>
                    <Text style={{ fontWeight: 'bold' }}>{ this.state.sendingTotal }</Text>
                    
                    <Grid>
                        
                        <Col style={{ padding: 10 }}>
                            <Button block danger onPress={ Actions.transferfrom } >
                                <Text>Cancel</Text>
                            </Button>
                        </Col>
                        <Col style={{ padding: 10 }}>
                            <Button block primary onPress={ () => {
                                Actions.transferhistory(this.state) }} >
                                <Text>Confirm</Text>
                            </Button>
                        </Col>
                    </Grid>
                    
                </Content>
            </Container>
        )
    }
}