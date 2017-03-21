import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';
import * as cc from 'creditcards';

@Directive({
  selector: '[validateCreditCard][ngModel],[validateCreditCard][formControl],[validateCreditCard][formControlName]',
  providers: [
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => CreditCardValidator), multi:true }
  ]
})
export class CreditCardValidator implements Validator {
     private validator: Function;

    constructor(@Attribute('validateCreditCard') public validateCreditCard: string) {
        console.log('cc validator start');
        this.validator = this.validateCreditCardFactory();
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }

    private validateCreditCardFactory() {
        return (c: AbstractControl) => {

            return cc.card.isValid(c.value) ? null : {
                validateCreditCard: {
                    valid: false
                }
            }
        }
    }
}

