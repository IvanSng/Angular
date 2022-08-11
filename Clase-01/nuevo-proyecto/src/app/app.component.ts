import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'nuevo-proyecto';
  titulo = 'Bienvenidos a Angular';
  subtitulo: string;
  fecha: Date;
  contador: number;

  constructor() {
    this.subtitulo = "El mejor framework de frontend de Google";
    this.fecha = new Date();
    this.contador = 0;

    // setTimeout(()=>{
    //   this.contador++;
    //   if(this.contador>this.subtitulo.length) this.contador = 0;
    // },100)

    // Hacerle acordar que falta ver algo
  }
}

