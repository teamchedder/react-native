import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Header, Left, Right, Body, Button, List, ListItem, Title, Icon, Fab } from 'native-base';

export default class TranferHistory extends Component {
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
                        <Title>Transfer history</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="checkmark" />
                            </Left>
                            <Body>
                                <Text>Ubon Alphonsus</Text>
                                <Text note>22000.00 | 31-05-2017</Text>
                            </Body>
                            <Right>
                                <Text note>Success</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="checkmark" />
                            </Left>
                            <Body>
                                <Text>Chinedu Okafor</Text>
                                <Text note>5000.00 | 30-05-2017</Text>
                            </Body>
                            <Right>
                                <Text note>Success</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="checkmark" />
                            </Left>
                            <Body>
                                <Text>Adetokunbo Dosunmu Okafor</Text>
                                <Text note>10000.00 | 27-05-2017</Text>
                            </Body>
                            <Right>
                                <Text note>Success</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="checkmark" />
                            </Left>
                            <Body>
                                <Text>Larry Chukwu</Text>
                                <Text note>15000.00 | 27-05-2017</Text>
                            </Body>
                            <Right>
                                <Text note>Success</Text>
                            </Right>
                        </ListItem>
                        
                    </List>
                    
                </Content>
            </Container>
        )
    }
}