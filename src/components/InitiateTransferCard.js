import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Form, Input, Item, Picker, Text, Header, Left, Right, Body, Button, Title, Icon, H3 } from 'native-base';

const countries = Picker
export default class InitiateTransfer extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCountry: 'Country',
            selectBanksName: [ 'Bank' ],
            selectBanksCode: [ 'Code'],
            selectedBank: 'Bank',
            selectedBankIndex: -1,
            receivingAccountName: '',
            accountNumberInput: ''
        }
    }

    changeAccountInputValue(number){
        this.setState({ accountNumberInput: number });
    }

    getAccountName(){
        fetch('http://192.168.43.8:3500/api/account/validate', 
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    account_number: this.state.accountNumberInput,
                    bank_code: this.state.selectBanksCode[this.state.selectedBankIndex]
                })
            })
            .then((response) => response.json())
            .then((responseJson) => { 
                console.log(responseJson.result.data);
                this.setState({ receivingAccountName: responseJson.result.data.account_name }); })
            .catch((error) => { console.error(error); });
    }
    render() {
        let banks = this.state.selectBanksName.map((s, i) => {
            return <Picker.Item key={i} value={s} label={s} />
        });
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
                <Content style={{ padding: 10}}>
                    {/*<View style={{ backgroundColor: '#ecf0f1', height: 100, borderBottomColor: '#bdc3c7', borderBottomWidth: 1, padding: 15 }}>*/}
                        <Text>Select receiving country</Text>
                        <Picker
                            //supportedOrientations={['portrait','landscape']}
                            //iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selectedCountry}
                            onValueChange={(countrySel) => {
                                this.setState({selectedCountry: countrySel}); 
                                console.log('selected: ' + countrySel);
                                fetch('http://192.168.43.8:3500/api/banks', //using localip since emulator can;t connect
                                    {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ country: countrySel })
                                    })
                                    .then((response) => response.json())
                                    .then((responseJson) => { 
                                        console.log(responseJson.result.data);
                                        this.setState({ selectBanksName: Object.values(responseJson.result.data) });
                                        this.setState({ selectBanksCode: Object.keys(responseJson.result.data) }); })
                                    .catch((error) => { console.error(error); });
                                }}
                            >
                            <Item label="Countries" value="" />
                            <Item label="Nigeria" value="nigeria" />
                            <Item label="Ghana" value="ghana" />
                            <Item label="Kenya" value="kenya" />
                        </Picker>
                    
                        <Text>Select receiving bank</Text>
                        <Picker
                            //supportedOrientations={['portrait','landscape']}
                            //iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selectedBank}
                            onValueChange={(bankSel) => {
                                let bankIndex = this.state.selectBanksName.indexOf(bankSel);
                                this.setState({ 
                                    selectedBank: bankSel,
                                    selectedBankIndex: bankIndex
                                });
                            }}
                            >
                            { banks }
                            
                        </Picker>
                    
                    <Form>
                        <Item>
                            <Input placeholder="Receiving account number" keyboardType={'numeric'}
                            onChangeText={ (accountNumberInput) => this.changeAccountInputValue(accountNumberInput) }
                            onSubmitEditing={() => this.getAccountName()}
                            value={this.state.accountNumberInput} />
                        </Item>
                        <Item>
                            <H3>{ this.state.receivingAccountName }</H3>
                        </Item>
                        <Item>
                            <Input placeholder="Amount to send" keyboardType={'numeric'} />
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