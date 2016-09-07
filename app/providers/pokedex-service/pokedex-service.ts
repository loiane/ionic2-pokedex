import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokedexService {

  constructor(private http: Http) {}

  getAllPokemon() {
    return this.http.get('data/v2/pokemon.json')
    //this.http.get('http://pokeapi.co/api/v2/pokemon/?limit=20')
      .map((res: Response) => res.json().results);
  }

  getPokemon(url: string){
    return this.http.get('data/v2/bulbasaur.json')
      .map((res: Response) => res.json());
  }

  getSpecies(url: string){
    return this.http.get('data/v2/species.json')
      .map((res: Response) => res.json());
  }

}
