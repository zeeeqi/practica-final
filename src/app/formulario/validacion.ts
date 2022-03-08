import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Validacion {

  static empiezaMayuscula(control: AbstractControl): ValidationErrors | null {
    if (control.value){
      let letra = control.value
      if (letra[0] == letra[0].toLocaleUpperCase() && letra[0] != letra[0].toLocaleLowerCase()) {
        return null;
      }
      else {
        return { empiezaMayuscula: true }
      }
    }else{
      return null;
    }
  }
}
