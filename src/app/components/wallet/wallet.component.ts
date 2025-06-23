import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Web3Service } from '../../services/web3.service';
import { EtherscanService } from '../../services/etherscan.service';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule
  ],
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  account: string = '';
  balance: string = '';
  transacciones: any[] = [];

  constructor(
    private web3Service: Web3Service,
    private snackBar: MatSnackBar,
    private etherscanService: EtherscanService
  ) {}

  async connectWallet(): Promise<void> {
    try {
      // Ejecutar loadWeb3 (aunque sea private, lo forzamos)
      await (this.web3Service as any)['loadWeb3']?.();

      this.account = this.web3Service.getAccount();
      this.balance = await this.web3Service.getBalance();

      console.log('Account:', this.account);
      console.log('Balance:', this.balance);

      this.etherscanService.getTransactions(this.account).subscribe((data) => {
        if (data.status === '1') {
          this.transacciones = data.result;
          console.log('Transacciones:', this.transacciones);
        } else {
          this.snackBar.open('No se encontraron transacciones en esta cuenta.', 'Cerrar', {
            duration: 3000,
          });
        }
      });

      this.snackBar.open('Billetera conectada con éxito.', 'Cerrar', {
        duration: 3000,
      });
    } catch (error) {
      this.snackBar.open('Error al conectar la billetera.', 'Cerrar', {
        duration: 3000,
      });
      console.error(error);
    }
  }
}


