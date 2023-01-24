import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() selectParams = new EventEmitter<any>();

  //Para poner un pais y una categoria predeterminada
  CategorySelection = 'general';
  CountrySelection = 'co';

  //Array de categorias
  categories: any [] = [
    {value: 'general', nombre: 'General'},
    {value: 'bussiness', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnologia'},
  ]

  //Array de paises
  countries: any [] = [
    {value: 'br', nombre: 'Brasil'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'co', nombre: 'Colombia'},
    {value: 'fr', nombre: 'Francia'},
    {value: 've', nombre: 'Venezuela'},
    {value: 'es', nombre: 'España'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  //funcion para hacer la busqueda mediante los parametros seleccionados
  newsSearch(){
    const params = {
      category: this.CategorySelection,
      country: this.CountrySelection
    }
    this.selectParams.emit(params);
  }

}
