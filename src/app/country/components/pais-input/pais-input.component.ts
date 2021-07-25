import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter:    EventEmitter<string> = new EventEmitter()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter()
  
  @Input() placeholder:string = ''

  debouncer: Subject<string> = new Subject()
  termino:string = '';
  
  constructor() { }
  
  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300) // ---> este operador de rxjs admite un valor en milisegundos, practicamente decimos no emitas el subscribe hasta que el observable deje de emitir valores por 300 ms
    )
      .subscribe( valor => {
      this.onDebounce.emit( valor )
    } )
  }
  
  buscar(){
     this.onEnter.emit( this.termino )   // a través del emit --> emito el evento (en este caso el termino)
  }
  
  teclaPresionada(){
    // const valor = event.target.value
    // console.log(valor);
    // console.log(this.termino);

    this.debouncer.next( this.termino )
  }

 

}
