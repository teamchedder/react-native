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
            selectedBankCode: 'Code',
            selectedBankIndex: -1,
            receivingAccountName: '',
            accountNumberInput: '',
            transferAmountInput: '',
            transferDescriptionInput: ''
        }
    }

    changeAccountInputValue(number){
        this.setState({ accountNumberInput: number });
    }

    getAccountName(){
        fetch('https://chedder.herokuapp.com/api/account/validate', 
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

    changeTransferAmountInputValue(number){
        this.setState({ transferAmountInput: number });
    }

    changeTransferDescriptionInputValue(text){
        this.setState({ transferDescriptionInput: text });
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
                                fetch('https://chedder.herokuapp.com/api/banks',
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
                            <Item label="Nigeria" value="Nigeria" />
                            <Item label="Ghana" value="Ghana" />
                            <Item label="Kenya" value="Kenya" />
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
                            <Input placeholder="Amount to send" 
                            keyboardType={'numeric'} 
                            onChangeText={ (transferAmountInput) => this.changeTransferAmountInputValue(transferAmountInput) }
                            
                            value={this.state.transferAmountInput} />
                        </Item>
                        <Item>
                            <Input placeholder="Description (Optional)" 
                            onChangeText={ (transferDescription) => this.changeTransferDescriptionInputValue(transferDescription) }
                            
                            value={this.state.transferDescriptionInput} />
                        </Item>
                    </Form>
                    <View style={{ height: 50}}></View>
                    <Button block primary onPress={ () => {
                        {/*//Transfer Data includes card data because FW still require pins for test accounts and OTP is sent to predesignated number out of reach.*/}
                        let transferData = {
                            "firstName": "ADETOKUNBO",
                            "lastName": "DOSUNMU",
                            "email": "adedosunmo@gmail.com",
                            "phoneNumber": "+2348026453737",
                            "receivingCountry": this.state.selectedCountry,
                            "receiver": this.state.receivingAccountName,
                            "recipientBank": this.state.selectedBank,
                            "recipientAccountNumber": this.state.accountNumberInput,
                            "cardNumber": "5061020000000000094",
                            "cvv": "347",
                            "pinVerve": "1111",
                            "expiryYear": "2020",
                            "expiryMonth": "07",
                            "pinMastercard": "1111",
                            "totalAmount": this.state.transferAmountInput,
                            "description": this.state.transferDescriptionInput,
                            "chargeAmount": 45
                        };
                        console.log('transferData as sent by InitiateTransferCards: ' + JSON.stringify(transferData));
                        Actions.confirmtransfer(transferData)
                        }}>
                        <Text>Confirm Transfer</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}