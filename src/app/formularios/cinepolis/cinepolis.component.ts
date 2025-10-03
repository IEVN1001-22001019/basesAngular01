import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {

  mensaje:string="";
  nombre:string="";
  TarjetaCine:string="";
  cantidadCompradores:number=0;
  cantidadBoletos:number=0;
  total:number=0;
  totaldescuento:number=0;
  totaldescuentotarjeta:number=0;
  totalfinal:number=0;


 calcular():void{
  if(this.cantidadCompradores > 0){


    if(this.cantidadBoletos <=  this.cantidadCompradores * 7 && this.cantidadBoletos != 0){
      this.total = this.cantidadBoletos * 12;
      if(this.cantidadBoletos > 5){
        this.totaldescuento = this.total * 0.85;
        this.totalfinal = this.totaldescuento;
        // this.mensaje = "Hola " + this.nombre + ", tu total es de $" + this.totalfinal.toFixed(2);
      }
      if(this.cantidadBoletos >= 3 && this.cantidadBoletos <= 5){
        this.totaldescuento = this.total * 0.9;
        this.totalfinal = this.totaldescuento;
        // this.mensaje = "Hola " + this.nombre + ", tu total es de $" + this.totalfinal.toFixed(2);
      }
      if(this.cantidadBoletos <= 2){
        this.totaldescuento = this.total;
        this.totalfinal = this.totaldescuento;
        // this.mensaje = "Hola " + this.nombre + ", tu total es de $" + this.totalfinal.toFixed(2);
      }
      if(this.TarjetaCine === "si"){
        this.totaldescuentotarjeta = this.totaldescuento * 0.9;
        this.totalfinal = this.totaldescuentotarjeta;
        // this.mensaje = "Hola " + this.nombre + ", tu total es de $" + this.totaldescuentotarjeta.toFixed(2);
      }
      else if(this.TarjetaCine === "no"){
        this.totaldescuentotarjeta = this.totaldescuento;
        this.totalfinal= this.totaldescuentotarjeta;
        // this.mensaje = "Hola " + this.nombre + ", tu total es de $" +  this.totaldescuentotarjeta.toFixed(2);
      }

      this.mensaje = "Hola " + this.nombre + ", tu total es de $" +  this.totalfinal.toFixed(2);
    }
    else{
      this.mensaje = "Error, cantidad de boletos invalida";
    }  
  }else{
    this.mensaje = "Error, cantidad de compradores invalida"
  }
  }
}
