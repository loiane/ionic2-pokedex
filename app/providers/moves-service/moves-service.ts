import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovesService {

  constructor(private http: Http) {}

  getMoves(){
    return this.http.get('data/v2/moves.json')
    //this.http.get('http://pokeapi.co/api/v2/pokemon/?limit=20')
      .map((res: Response) => res.json().results);
  }
}
