import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, List, ListItem, Header, Grid, Col, Row, Left, Right, Body, Button, Icon, Title } from 'native-base';

export default class ConfirmTransfer extends Component {
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
                    <Grid>
                        <Col style={{ height: 250, padding: 10 }}>
                            <Text>Receiving country:</Text>
                            <Text>Receiver's name:</Text>
                            <Text>Receiving bank:</Text>
                            <Text>Receiver's account #:</Text>
                            <Text>Amount to transfer:</Text>
                            <Text>Rate:</Text>
                            <Text>Charges:</Text>
                            <Text style={{ fontWeight: 'bold' }}>Total:</Text>
                            
                        </Col>
                        <Col style={{ height: 230, padding: 10  }}>
                            <Text style={{ fontWeight: 'bold' }}>Nigeria</Text>
                            <Text style={{ fontWeight: 'bold' }}>Marcus Aurelius</Text>
                            <Text style={{ fontWeight: 'bold' }}>GTBANk PLC</Text>
                            <Text style={{ fontWeight: 'bold' }}>0912345873</Text>
                            <Text style={{ fontWeight: 'bold' }}>10000.00</Text>
                            <Text style={{ fontWeight: 'bold' }}>1.00</Text>
                            <Text style={{ fontWeight: 'bold' }}>90.00</Text>
                            <Text style={{ fontWeight: 'bold' }}>10090.00</Text>
                            
                        </Col>
                    </Grid>
                    <Grid>
                        
                        <Col style={{ padding: 10 }}>
                            <Button block danger onPress={ Actions.transferfrom } >
                                <Text>Cancel</Text>
                            </Button>
                        </Col>
                        <Col style={{ padding: 10 }}>
                            <Button block primary onPress={ Actions.transferhistory } >
                                <Text>Confirm</Text>
                            </Button>
                        </Col>
                    </Grid>
                    
                </Content>
            </Container>
        )
    }
}