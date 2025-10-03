import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {

  b1:string="";
  b2:string="";
  mult:number=0;
  tol:number=0;
  mensaje:string="";
  resultado:number=0;

   calcular():void{

    this.resultado = parseInt(this.b1 + this.b2) * this.mult;
    this.mensaje = "El resultado es: "+ this.resultado;

   }


}
