import { Directive, NgModule } from '@angular/core';
import { CreditCardValidator } from './components/creditCard.directive';

@NgModule({
  declarations: [CreditCardValidator],
  exports: [CreditCardValidator]
})
export class NgCreditCardModule {}
