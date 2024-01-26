import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
@Input() cantidadParaElCarrito: number = 0
estaOscuro: boolean = false;
@Output() enviarOrdenParaCambiarFondo = new EventEmitter()

cambiarFondo() {
  this.estaOscuro = !this.estaOscuro
this.enviarOrdenParaCambiarFondo.emit(this.estaOscuro)
}

}
