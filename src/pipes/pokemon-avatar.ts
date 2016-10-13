import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'pokemonAvatar'
})
@Injectable()
export class PokemonAvatar {

  private imgBaseUrl: string = 'assets/images/pokemon/';

  transform(value: string, args: any[]) {
    return this.imgBaseUrl + value + '.png';
  }
}
