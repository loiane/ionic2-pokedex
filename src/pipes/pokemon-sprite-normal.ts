import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'pokemonSprite'
})
@Injectable()
export class PokemonSpriteNormal {

  transform(value, args) {
    value = value.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/',
      'assets/images/');
    return value;
  }
}
