import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WalletComponent } from './components/wallet/wallet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    WalletComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dapp';
}


