import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import Web3 from 'web3';
import { Subject } from 'rxjs';

declare let window: any;

@Injectable({
    providedIn: 'root'
})
export class EthService {
    private ethStatusListener = new Subject<boolean>();
    private ethMessageListener = new Subject<string>();
    private ethEventsListener = new Subject<string[]>();
    private ethAccountListener = new Subject<string>();

    web3: any;
    private web3Provider: any;
    private eventCreatorContract: any;
    private isDappBrowser = false;
    private ethMessage: string;
    private currentAccount: string;

    getIsDappBrowser() {
        return this.isDappBrowser;
    }

    getEthAccountListener() {
        return this.ethAccountListener.asObservable();
    }

    getEthStatusListener() {
        return this.ethStatusListener.asObservable();
    }

    getEthMessageListener() {
        return this.ethMessageListener.asObservable();
    }

    getEthEventsListener() {
        return this.ethEventsListener.asObservable();
    }

    async createEvent(title: string, description: string, startDate: number, endDate: number) {
        try {
            await this.eventCreatorContract.methods.createEvent(title, description, startDate, endDate).send({
                from: this.currentAccount,
                value: 1000000
            });
            const events = await this.eventCreatorContract.methods.getEvents().call();
            this.ethEventsListener.next(events);
        } catch (error) {
            console.log(error);
        }
    }

    async addInfo(firstName: string, email: string, phoneNumber: string) {
        try {
            await this.eventCreatorContract.methods.addInfo(firstName, email, phoneNumber).send({
                from: this.currentAccount
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getEvents() {
        const events = await this.eventCreatorContract.methods.getEvents().call();
        // console.log(events);
        this.ethEventsListener.next(events);
    }

    async initializeContract() {
        try {
            const eventCreatorJson = require('../contracts/EventCreator.json');
            this.eventCreatorContract = this.web3.eth.Contract(
                eventCreatorJson.abi, eventCreatorJson.networks['5777'].address
            );
            const accounts = await this.web3.eth.personal.getAccounts();
            this.currentAccount = accounts[0];
            this.ethAccountListener.next(this.currentAccount);
            
            const user = await this.eventCreatorContract.methods.users(this.currentAccount).call();
            // console.log(user);
            if(!user) {
                throw new Error('Failed to get user on current network');
            }

            if(user.fullName === '') {
                this.router.navigate(['/info']);
            } else {
                this.router.navigate(['/']);
            }
        } catch (error) {
            this.ethMessage = 'Application has not been deployed to detected network. Please change your network to Localhost 8545';
            this.isDappBrowser = false;
            this.ethStatusListener.next(this.isDappBrowser);
            this.ethMessageListener.next(this.ethMessage);
            console.log(error.message);
        }
    }

    constructor(private router: Router) {
        window.addEventListener('load', async () => {
            if (window.ethereum) {
                // Modern dapp browsers...
                this.isDappBrowser = true;
                this.ethStatusListener.next(this.isDappBrowser);
                this.web3Provider = window.ethereum;
                this.web3 = new Web3(this.web3Provider);
                try {
                    // Request account access if needed
                    await window.ethereum.enable();
                    // Acccounts now exposed
                    this.initializeContract();
                } catch (error) {
                    // User denied account access...
                }

                window.ethereum.on('accountsChanged', accounts => {
                    window.location.reload();
                });
            } else if (window.web3) {
                // Legacy dapp browsers...
                this.isDappBrowser = true;
                this.ethStatusListener.next(this.isDappBrowser);
                this.web3Provider = window.web3.currentProvider;
                this.web3 = new Web3(this.web3Provider);
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
