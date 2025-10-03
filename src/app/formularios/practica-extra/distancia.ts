 export class Distancia {
  x1: number;
  y1: number;
  x2: number;
  y2: number;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  calcular(): number {
    return Math.sqrt(((this.x2 - this.x1) ** 2) + ((this.y2 - this.y1) ** 2));
  }
}

