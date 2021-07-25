import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Country } from '../interfaces/pais.interface';
// import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})


export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ) :Observable<Country[]> {  //----> Aca hay que decirle de que tipo es la respuesta (tipado)

    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>( url );

    // .pipe(
          //   catchError( err => of([]) )
          // );
  }

  buscarCapital( termino: string ): Observable<Country[]> { // --> recibe como parametro el termino porque es lo esperado a partir del evento tipeo del usuario, este llama al arreglo por capital
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>( url )  // ---> retorna la constante como metodo http.get()
  }

  getPaisPorAlpha( id: string ): Observable<Country> { // --> recibe como parametro el termino porque es lo esperado a partir del evento tipeo del usuario, este llama al arreglo por capital
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>( url )  // ---> retorna la constante como metodo http.get()
  }

}
