import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'pokemonImage'
})
@Injectable()
export class PokemonImage {

  private imgBaseUrl: string = 'assets/images/pokemon/other-sprites/official-artwork/';

  transform(value: string, args: any[]) {
    return this.imgBaseUrl + value + '.png';
  }
}
