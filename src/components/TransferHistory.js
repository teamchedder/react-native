import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { Container, Content, Text, Header, Left, Right, Body, Button, List, ListItem, Title, Icon, Fab } from 'native-base';

export default class TranferHistory extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
        console.log('history says prop is: '+ this.props.navigationState.receivingRate);
    }

    componentDidMount(){
        let data = this.props.navigationState;
        this.setState({
            items: [data.receiverName + ' | ' + data.receivingAmount + ' | ' +  new Date().toLocaleDateString('en-US')]
        });
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
                        <Title>Transfer history</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List dataArray={ this.state.items }
                        renderRow={ (item) => 
                            <ListItem>
                                <Text>{ item }</Text>
                            </ListItem>
                        }>
                    </List>
                  
                
                   
                </Content>
            </Container>
        )
    }
}