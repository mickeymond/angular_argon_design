import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

declare let window: any;
declare let web3: any;
declare let require: any;

const Web3 = require('web3');
const TruffleContract = require('truffle-contract');

@Injectable({
    providedIn: 'root'
})
export class EthService {
    private ethStatusListener = new Subject<boolean>();
    private ethMessageListener = new Subject<string>();
    private ethEventsListener = new Subject<string[]>();
    private ethAccountListener = new Subject<string>();

    private eventCreatorContract: any;
    private isDappBrowser = false;
    private ethMessage: string;
    private currentAccount: string;

    getIsDappBrowser() {
        return this.isDappBrowser;
    }

    getCurrentAccount() {
        return this.currentAccount;
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
        const receipt = await this.eventCreatorContract.createEvent(title, description, startDate, endDate, {
            from: this.currentAccount,
            value: 1000000
        });
        const eventAddress = receipt.logs[0].args.newEvent;
        // console.log(receipt);
        this.router.navigate(['/event', eventAddress]);
    }

    async addInfo(firstName: string, email: string, phoneNumber: string) {
        try {
            const receipt = await this.eventCreatorContract.addInfo(firstName, email, phoneNumber, {
                from: this.currentAccount
            });
            console.log(receipt);
            this.router.navigate(['/events']);
        } catch (error) {
            console.log(error);
        }
    }

    async getEvents() {
        const events = await this.eventCreatorContract.getEvents();
        // console.log(events);
        this.ethEventsListener.next(events);
    }

    async initializeContract() {
        // console.log(web3);
        try {
            const EventCreatorContract = TruffleContract(require('../contracts/EventCreator.json'));
            EventCreatorContract.setProvider(web3.currentProvider);

            this.eventCreatorContract = await EventCreatorContract.deployed();
            // console.log(this.eventCreatorContract);

            this.currentAccount = web3.eth.accounts[0];
            this.ethAccountListener.next(this.currentAccount);
            // console.log(this.currentAccount);

            const user = await this.eventCreatorContract.users(this.currentAccount);
            // console.log(user);

            if (user[0] === '') {
                this.router.navigate(['/info']);
            }
        } catch (error) {
            this.ethMessage = error.message;
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
                window.web3 = new Web3(window.ethereum);
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
                window.web3 = new Web3(window.web3.currentProvider);
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
