import { Injectable } from '@angular/core';

import Web3 from 'web3';
import TruffleContract from 'truffle-contract';
import { Subject } from 'rxjs';

declare let window: any;

@Injectable({
    providedIn: 'root'
})
export class EthService {
    private ethStatusListener = new Subject<boolean>();
    private ethMessageListener = new Subject<string>();

    web3: any;
    private web3Provider;
    private eventCreatorContract: any;
    private isDappBrowser = false;
    private ethMessage: string;

    async initializeContract() {
        try {
            const EventCreator = TruffleContract(require('../contracts/EventCreator.json'));
            EventCreator.setProvider(this.web3Provider);
            this.eventCreatorContract = await EventCreator.deployed();
            console.log(this.eventCreatorContract);
        } catch (error) {
            this.ethMessage = 'Application has not been deployed to detected network. Please change your network in Metamask';
            this.isDappBrowser = false;
            this.ethStatusListener.next(this.isDappBrowser);
            this.ethMessageListener.next(this.ethMessage);
            console.log(error.message);
        }
    }

    getIsDappBrowser() {
        return this.isDappBrowser;
    }

    getEthStatusListener() {
        return this.ethStatusListener.asObservable();
    }

    getEthMessageListener() {
        return this.ethMessageListener.asObservable();
    }

    constructor() {
        window.addEventListener('load', async () => {
            if (window.ethereum) {
                // Modern dapp browsers...
                this.isDappBrowser = true;
                this.ethStatusListener.next(this.isDappBrowser);
                this.web3Provider = window.ethereum;
                this.web3 = new Web3(window.ethereum);
                try {
                    // Request account access if needed
                    await window.ethereum.enable();
                    // Acccounts now exposed
                    this.initializeContract();
                } catch (error) {
                    // User denied account access...
                }
            } else if (window.web3) {
                // Legacy dapp browsers...
                this.isDappBrowser = true;
                this.ethStatusListener.next(this.isDappBrowser);
                this.web3Provider = window.web3.currentProvider;
                this.web3 = new Web3(window.web3.currentProvider);
                // Acccounts always exposed
                this.initializeContract();
            } else {
                // Non-dapp browsers...
                this.isDappBrowser = false;
                this.ethMessage = 'Non-Ethereum browser detected. You should consider trying MetaMask!';
                this.ethStatusListener.next(this.isDappBrowser);
                this.ethMessageListener.next(this.ethMessage);
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        });
    }
}
