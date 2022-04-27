import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input() nuevo:personaje = {Nombre:'', Poder:0};
  
  // @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter<personaje>();

  constructor(private dbzService:DbzService){}

  agregar():void{
    if (this.nuevo.Nombre.trim().length === 0){ return; };

    this.dbzService.agregarPersonaje(this.nuevo);
    
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {Nombre: '', Poder: 0};
  
  }
}
