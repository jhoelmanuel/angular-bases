import { Component, OnInit } from '@angular/core';
import { personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
  nuevo: personaje = {
    Nombre: 'Maestro Roshi',
    Poder: 1000
  }
  
  constructor(private dbzService:DbzService){ }
}