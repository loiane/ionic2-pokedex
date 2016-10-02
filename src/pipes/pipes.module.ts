import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { Capitalize } from './capitalize';
import { DivBy10 } from './div-by-10';
import { PokemonAvatar } from './pokemon-avatar';
import { PokemonGender } from './pokemon-gender';
import { PokemonImage } from './pokemon-image';
import { PokeNumber } from './pokeNumber';
import { SplitCapitalize } from './split-capitalize';

export const sharedPipes = [
  Capitalize,
  DivBy10,
  PokemonAvatar,
  PokemonGender,
  PokemonImage,
  PokeNumber,
  SplitCapitalize
];

@NgModule({
  imports: [ CommonModule ],
  declarations: [ sharedPipes ],
  exports: [ sharedPipes ]
})
export class PipesModule { }
