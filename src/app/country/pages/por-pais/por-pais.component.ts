import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino:string = '';
  hayError:boolean = false;
  paises: Country[] = [];
  
  constructor(private PaisService: PaisService) { }

  
  buscar( termino:string ){

    this.hayError = false
    this.termino = termino  // ---> aca igualo la propiedad termino con el argumento termino ---> Cuando llegue al HTML el componente va a estar escuchando ese evento

    this.PaisService.buscarPais(this.termino)
    .subscribe( resp => {
      // this.paises.push(...resp)  <---- Acá me suena raro, pero si devuelve un array podemos igualarlo al array de paises
      this.paises = resp

    }, (err) => {

      this.hayError = true
      this.paises = []

    })
    
  }

  sugerencias( termino: string ){
    this.hayError = false;
  }
  
  
}
