import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private PaisService: PaisService 
  ) { } // ---> viene con todo lo necesario para subscribirnos a los cambios de la url

  ngOnInit(): void {


    this.activateRoute.params
    .pipe(  // ---> aca yo puedo especificar cualquier candidad de operadores que van a trabajar con el producto del observable
      switchMap( ({ id }) => this.PaisService.getPaisPorAlpha( id ) ), // uso de destructuracion para extraer el id
      tap( console.log )  // ---> responde en consola lo que recibe. 
      ) 
    .subscribe( pais => {

      this.pais = pais

    } )

    // ESTO DE ABAJO ES IGUAL A LO DE ARRIBA (HACE LO MISMO)

    // this.activateRoute.params   ---> aca leemos los parametros, extraemos el id y lo enviamos a traves de un observable, este lo subscribimos pasandole el pais
    // .subscribe( ( {id} ) => {
    //   console.log(id);

    //   this.PaisService.getPaisPorAlpha( id )
    //   .subscribe( pais => {
    //     console.log(pais);
    //   } )



    // } )

  }

}
