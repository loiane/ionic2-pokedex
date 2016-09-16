import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the PokemonImage pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'pokemonImage'
})
@Injectable()
export class PokemonImage {

  private imgBaseUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/';

  transform(value: string, args: any[]) {
    return this.imgBaseUrl + value + '.png';
  }
}
