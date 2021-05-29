import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    // multi -> dice ad angular di aggiungere la classe creata ai validatori già esistenti in angular
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {

  constructor() { }

  // riceve il controllo da fare come parametro, l'input viene richiamato nel tag html dell'oggetto su cui
  // bisogna fare la verifica e gli si associa l'altro oggetto con cui deve essere paragonato (l. 70 html)
  // il parent per il campo confpass è l'elemento della form. quindi il parent parte dalla radice della form
  // fino a trovare la proprietà che è stata specificata nell'html
  @Input() appConfirmEqualValidator: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { notEqual: true };
    }
    return null;
  }


  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
