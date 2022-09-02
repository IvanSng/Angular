import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadoModel } from 'src/app/models/empleado.models';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  form: FormGroup;
  constructor(private service: EmpleadoService, formBuilder: FormBuilder) {
    // this.form = new FormGroup({
    //   id: new FormControl<number>(0),
    //   nombre: new FormControl<string>(""),
    //   mail: new FormControl<string>(""),
    //   documento: new FormControl<number>(0)
    // })

    this.form = formBuilder.group({
      id: [0],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.max(20)]],
      mail: ["", [Validators.required, Validators.email]],
      documento: [0, [Validators.required, Validators.min(1000000),Validators.max(99999999)]]
    })
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.form.valid) {
      let empleado: EmpleadoModel = this.form.value;
      this.service.agregar(empleado).subscribe(() => {
        Swal.fire("Operacion Exitosa", "El empleado se agrego correctamente");
        this.form.reset();
      })
    } else {
      Swal.fire("Error", "Corrija los errores antes de continuar","error");
    }
  }

  buscar():void {
    this.form.get("documento")?.setValue(Math.random() * 9999999)
  }

}
