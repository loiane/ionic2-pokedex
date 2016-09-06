import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokedexService {

  constructor(private http: Http) {}

  getAllPokemon() {
    return this.http.get('data/v2/pokemon.json')
      .map((res: Response) => res.json().results);
  }

}
