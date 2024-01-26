import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
@Input({required: true}) producto: any
@Output() addToCart: EventEmitter<Producto> = new EventEmitter()
@Output() deleteToCart: EventEmitter<Producto> = new EventEmitter()

addToCartHandler(producto: Producto){
  this.addToCart.emit(producto)
}
deleteToCartHandler(producto: Producto) {
this.deleteToCart.emit(producto)
}

}
