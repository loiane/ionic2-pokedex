import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the PokemonAvatar pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'pokemonAvatar'
})
@Injectable()
export class PokemonAvatar {

  private imgBaseUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  transform(value: string, args: any[]) {
    return this.imgBaseUrl + value + '.png';
  }
}
