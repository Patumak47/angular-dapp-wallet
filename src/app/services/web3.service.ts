import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3!: Web3;
  private account: string = '';

  constructor() {
    if (typeof (window as any).ethereum !== 'undefined') {
      this.web3 = new Web3((window as any).ethereum);
      this.loadWeb3();
    } else {
      alert('MetaMask no está instalado. Instálalo desde https://metamask.io');
    }
  }

  public async loadWeb3() {
    try {
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await this.web3.eth.getAccounts();
      this.account = accounts[0];
      console.log('Connected account:', this.account);
    } catch (err) {
      console.error('User denied account access or error:', err);
    }
  }

  public getAccount(): string {
    return this.account;
  }

  public async getBalance(): Promise<string> {
    if (!this.account) return '0';
    const balance = await this.web3.eth.getBalance(this.account);
    return this.web3.utils.fromWei(balance, 'ether');
  }
}





