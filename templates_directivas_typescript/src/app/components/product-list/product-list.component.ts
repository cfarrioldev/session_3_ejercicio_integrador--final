import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listaDeProductos: any = [];

   @Output() recibirProductoParaQueMiPadreLoSume : EventEmitter<Producto> = new EventEmitter()
  @Output() recibirProductoParaQueMiPadreLoReste: EventEmitter<Producto> = new EventEmitter()
  enviarAMiPadreParaQueSume(producto: Producto){
    this.recibirProductoParaQueMiPadreLoSume.emit(producto)
  }

  enviarAMiPadreParaReste(producto: Producto) {
      this.recibirProductoParaQueMiPadreLoReste.emit(producto)
  }


ngOnInit(): void {
  this.listaDeProductos =  [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 29.99,
      descripcion: "Descripción del producto 1.",
      imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`,
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 39.99,
      descripcion: "Descripción del producto 2.",
      imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`,
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 49.99,
      descripcion: "Descripción del producto 3.",
      imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`,
    },
    {
      id: 4,
      nombre: "Producto 4",
      precio: 19.99,
      descripcion: "Descripción del producto 4.",
      imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`,
    },
    {
      id: 5,
      nombre: "Producto 5",
      precio: 59.99,
      descripcion: "Descripción del producto 5.",
      imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`,
    },
    {
      id: 6,
      nombre: "Producto 6",
      precio: 69.99,
      descripcion: "Descripción del producto 6.",
      imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`,
    },
    {
      id: 7,
      nombre: "Producto 7",
      precio: 79.99,
      descripcion: "Descripción del producto 7.",
      imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`,
    },
    {
      id: 8,
      nombre: "Producto 8",
      precio: 89.99,
      descripcion: "Descripción del producto 8.",
      imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`,
    },
    {
      id: 9,
      nombre: "Producto 9",
      precio: 99.99,
      descripcion: "Descripción del producto 9.",
      imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`,
    },
    {
      id: 10,
      nombre: "Producto 10",
      precio: 109.99,
      descripcion: "Descripción del producto 10.",
      imagen: `https://picsum.photos/640/640?r=${Math.floor(Math.random() * 1000)}`,
    },
  ];



}


}
