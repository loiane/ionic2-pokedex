import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'pokemonGender'
})
@Injectable()
export class PokemonGender {

  transform(value: string, args: any[]) {
    let femalePerc = parseInt(value) / 0.08;
    let malePerc = 100 - femalePerc;
    return malePerc + '% male, ' + femalePerc + '% female';
  }
}
