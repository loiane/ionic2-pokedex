import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { PipesModule } from '../../pipes/pipes.module';
import { PokemonDetailAbilities } from './pokemon-detail-abilities/pokemon-detail-abilities';
import { PokemonDetailEvolution } from './pokemon-detail-evolution/pokemon-detail-evolution';
import { PokemonDetailSpecies } from './pokemon-detail-species/pokemon-detail-species';
import { PokemonDetailMoveDetail } from './pokemon-detail-move-detail/pokemon-detail-move-detail';
import { PokemonDetailMoveDetailRow } from './pokemon-detail-move-detail-row/pokemon-detail-move-detail-row';
import { PokemonDetailMoves } from './pokemon-detail-moves/pokemon-detail-moves';
import { PokemonDetailSprites } from './pokemon-detail-sprites/pokemon-detail-sprites';
import { PokemonDetailStats } from './pokemon-detail-stats/pokemon-detail-stats';
import { PokemonDetailStatsItem } from './pokemon-detail-stats-item/pokemon-detail-stats-item';
import { PokemonDetailTypeEffectiveness } from './pokemon-detail-type-effectiveness/pokemon-detail-type-effectiveness';
import { PokemonDetailTypeEffectivenessRow } from './pokemon-detail-type-effectiveness-row/pokemon-detail-type-effectiveness-row';
import { Utilities } from '../../util/utilities';

const pokemonDetails = [
  PokemonDetailAbilities,
  PokemonDetailEvolution,
  PokemonDetailMoveDetail,
  PokemonDetailMoveDetailRow,
  PokemonDetailMoves,
  PokemonDetailSpecies,
  PokemonDetailSprites,
  PokemonDetailStats,
  PokemonDetailStatsItem,
  PokemonDetailTypeEffectiveness,
  PokemonDetailTypeEffectivenessRow
];

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    IonicModule.forRoot(PokemonDetailAbilities),
    IonicModule.forRoot(PokemonDetailMoves)
  ],
  declarations: [
    pokemonDetails
  ],
  exports: [
    pokemonDetails
  ],
  providers: [
    Utilities
  ]
})
export class PokemonDetailsModule { }
