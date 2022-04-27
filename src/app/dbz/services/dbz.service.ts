import { Injectable } from "@angular/core";
import { personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes:personaje[] = [
        { Nombre: 'Goku', Poder: 15000},
        { Nombre: 'Vegeta', Poder: 7500}
    ]

    get personajes():personaje[]{
        return [...this._personajes];
    }

    constructor(){ }

    agregarPersonaje( personaje: personaje){
        this._personajes.push(personaje);
    }

}