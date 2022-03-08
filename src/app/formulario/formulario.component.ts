import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from './formulario.service';
import { Validacion } from './validacion';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  datos!: string;

  get message() {
    return this.formService.message;
  }

  constructor(private formService: FormularioService) { }

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30), Validacion.empiezaMayuscula]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  submit() {
    if (this.formularioContacto.valid) {
      this.formService.send(JSON.stringify(this.formularioContacto.value))
        .subscribe((data: any) => {
          this.formService.message = data.message
          setTimeout(()=>{
            this.formService.message = ''
          },5000)
        })
      this.formularioContacto.reset();
    } else {
      this.formService.message = 'Formulario no válido'
    }
  }
}
