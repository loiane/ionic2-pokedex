import { Injectable, Pipe } from '@angular/core';

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
