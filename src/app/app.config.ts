import { provideRouter } from '@angular/router';
import { WalletComponent } from './components/wallet/wallet.component';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: WalletComponent }
    ])
  ]
};


