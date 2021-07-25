# PaisesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Resumenes de Practico

Para pegarle a la api o al endpoint es recomendable importarnos el HttpClientModule a nuestro modulo donde vamos a querer aplicar
Este modulo nos va a dejar transportar el "private http: (que va a ser de tipo) HttpClient
Luego nos traemos la URL que necesitemos (podemos usarlo dentro del .get o crear una variable)
con el metodo que tenemos dentro del http "this.http.get( pegamos la url / variable )"  <----- Este nos devuelve un Observable
pero para que el observable nos nos devuelva una respuesta tenemos que usar el metodo .subscribe( res => { de lo que necesitemos traernos } )


## Manejo de errores
Cuando hacemos la peticion a la Api, podemos usar opreadores rxjs de los "observables"
luego de la peticion get ejecutamos la funcion .pipe(
    ---> catchError( err => of([]) )  ---> Este catch error lo traemos de rxjs/operator --> Es una funcion la cual regresa un observable `transforma el observable en lo que nosotros querramos, en este caso retorna un array vacío`
)

Por otra parte ---> cuando mostramos la respuesta a la peticion a traves del .suscribe( este acepta varios parametros (respuesta, error y next)) --> De la siguiente manera .subscribe((res) => { f(res) }, (err) => f(err) ) ---> res de respuesta, err de error


## Creando interface de peticion

Probando el endPoint desde postman podemos copiar una respuesta y realizar la transformación a interface.ts desde "app.quicktype.io"
---> Cuando le ponemos el tipado al observable tambien se lo tengo que poner al .get<Country>()


## Trayendome propiedades de un componente a otro

@input() ----> con el input me voy a estar trayendo la propiedad con sus valores desde el componente donde lo estamos cargando, esto se tiene que hacer a traves del <app-component [nombreDeLaPropiedad]='nombreDeLaPropiedad'> ---> asi le estoy enviando al componente.ts los valores, que luego podre inyectar en el componente (Tienen que estar conectados)

@output() ----> a través del output generamos los eventos. Al nombre del evento es conveniente anteponerle la palabra "on" --> "onEnter" y van a ser de tipo EventEmitter = new EventEmiter()  ----> Recordar traernos en el import a través de la destructuración el modulo desde @angular/core

## DebounceTime

OnDebounce ---> Event para que se active una vez que la persona deje de escribir. 
rxjs viene con un observable especial llamado "Subjet" forma de crear un observable manualmente. 
 ---> dbouncer: Subject<string> = new Subject().

 ## ngOnInit

 Correspondiente al ciclo de vida de los componentes, este se dispara una sola vez cuando el componente es creado.
 Para capturar.
 En el proyecto para capturar lo que escribe el usuario "debouncer" usamos la funcion "teclaPresionada" cada vez que el usuario escriba un valor con el .next() envia el siguiente valor que el usuario escribe. Se encuentra conectado el dbouncer cada vez que el usuario precione una tecla llama al next, el next esta subscripto a traves del .subscribe(). dentro el ngonInit.
 el .pipe(
     nos permite transformar la salida del subscribe
 )

 ## Evento (input)='evento( $evento )'
---> este dispara el evento según el valor como va escribiento el usuario. Dentro del proyecto tenemos la funcion "teclaPresionada" donde guardamos en una variable el "event.target.value" este nos devuelve cada cosa que va tipeando el usuario 



