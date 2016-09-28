import { Injectable, Pipe } from '@angular/core';

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
