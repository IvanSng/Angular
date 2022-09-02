import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { EmpleadoModel } from '../models/empleado.models';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() { }

  agregar(empleado: EmpleadoModel): Observable<any> {
    return new Observable((obs: Observer<any>) => {
      obs.next(empleado);
    })
  }
}
