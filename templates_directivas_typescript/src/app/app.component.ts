import { Component} from '@angular/core';
import { Producto } from './interfaces/Producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templates_directivas_typescript';
  productosSeleccionados: Producto[] = []
  cantidadSeleccionada: number = 0
  modoOscuro: boolean = false

  recibirProducto(producto: Producto){
    const ids = this.productosSeleccionados.map(p => p.id.toString())
    if(ids && !ids.includes(producto.id.toString())){
        producto = {
        ...producto,
        cant: 1
      }
        this.productosSeleccionados.push(producto)
    }else {
      this.productosSeleccionados = this.productosSeleccionados.filter((p : Producto) => {
        if(p.id === producto.id) {
           p.cant =  p.cant + 1
        }
        return p
      })
    }
    this.cantidadSeleccionada = this.productosSeleccionados.reduce((acc: any, elem: any) => {
      if(elem.cant){
        acc += elem.cant
      }
      return acc
     }, 0)
  }

  eliminarProductos (producto: Producto) {
      this.productosSeleccionados = this.productosSeleccionados.filter(p => {
        if(p.id === producto.id){
          p.cant = p.cant - 1
        }
        return p
      })
      this.productosSeleccionados = this.productosSeleccionados.filter(p => p.cant > 0);

      this.cantidadSeleccionada = this.productosSeleccionados.reduce((acc: any, elem: any) => {
        if(elem.cant){
          acc += elem.cant
        }
        return acc
       }, 0)
  }

  recibirOrdenParaCambiarElFondo(modoOscuro: boolean){
    this.modoOscuro = modoOscuro
  }


}
