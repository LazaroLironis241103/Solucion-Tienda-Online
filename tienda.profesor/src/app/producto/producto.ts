import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.html',
  styleUrls: ['./producto.css']
})
export class ProductoComponent {
  @Input() descripcion: string = 'Nuevo Producto';
  @Input() precio: number = 100;
}
