import { Country } from './../../interfaces/pais.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
})


export class CountryTableComponent {

 @Input() paises: Country[] = []
 @Input() capitales: Country[] = []  // --> Recordar declarar el @input para pasarle desde la llamada del componente reutilizable los datos que estamos guardando

  constructor() { }


}
