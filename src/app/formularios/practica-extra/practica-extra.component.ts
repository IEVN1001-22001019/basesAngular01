import { Component } from '@angular/core';
import { Distancia } from './distancia';

@Component({
  selector: 'app-practica-extra',
  standalone: false,
  templateUrl: './practica-extra.component.html',
  styleUrl: './practica-extra.component.css'
})
export class PracticaExtraComponent {
  x1: number | null = null;
  y1: number | null = null;
  x2: number | null = null;
  y2: number | null = null;

  mensaje: string = "";
  resultado: number = 0;

  calculardistancia(): void {
    if (this.x1 === null || this.y1 === null || this.x2 === null || this.y2 === null) {
      this.mensaje = "Error, valores no válidos";
      return;
    }


    const d = new Distancia(this.x1, this.y1, this.x2, this.y2);
    this.resultado = d.calcular();
    this.mensaje = "La distancia entre los dos puntos es: " + this.resultado.toFixed(2);
  }
}
