import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Pokedex provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Pokedex {

  constructor(private http: Http) {}

  getAllPokemon() {
    return this.http.get('data/v2/pokemon.json')
      .map((res: Response) => res.json().results);
  }

}
