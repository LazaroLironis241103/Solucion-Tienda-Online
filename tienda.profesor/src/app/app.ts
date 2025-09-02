import { Component } from '@angular/core';
import { ListadoProductosComponent } from './listado-productos/listado-productos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoProductosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  titulo = 'Tienda Online';
}
