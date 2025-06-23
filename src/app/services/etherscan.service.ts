import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtherscanService {
  private apiKey = 'EVXFFUPQ7ZZSV9266DG4FMCSP7VGCTEY8C';
  private baseUrl = 'https://api.etherscan.io/api';

  constructor(private http: HttpClient) {}

  getTransactions(address: string): Observable<any> {
    const url = `${this.baseUrl}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}

