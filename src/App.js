import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import TransferFrom from './components/TransferFrom';
import InitiateTransferCard from './components/InitiateTransferCard';
import ConfirmTransfer from './components/ConfirmTransfer';
import GetAccountDetails from './components/GetAccountDetails';
import GetCardDetails from './components/GetCardDetails';
import InitiateTransferAccount from './components/InitiateTransferAccount';
import TransferHistory from './components/TransferHistory';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="transferfrom" initial={ true }  component={ TransferFrom } hideNavBar={ true }  />
                    <Scene key="initiatetransfercard" component={ InitiateTransferCard } hideNavBar={ true }/>
                    <Scene key="confirmtransfer" component={ ConfirmTransfer } hideNavBar={ true } />
                    <Scene key="getaccountdetails" component={ GetAccountDetails } hideNavBar={ true } />
                    <Scene key="getcarddetails" component={ GetCardDetails } hideNavBar={ true } />
                    <Scene key="initiatetransferaccount" component={ InitiateTransferAccount } hideNavBar={ true } />
                    <Scene key="transferhistory"  component={ TransferHistory } hideNavBar={ true } />                    
                </Scene>
            </Router>
        )
    }
}