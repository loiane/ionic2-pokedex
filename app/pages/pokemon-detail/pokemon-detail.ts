import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PokedexService } from '../../providers/pokedex-service/pokedex-service';
import { Capitalize } from '../../pipes/capitalize';
import { PokeNumber } from '../../pipes/pokeNumber';

import { PokemonDetailSprites } from '../../components/pokemon-detail-sprites/pokemon-detail-sprites';
import { PokemonDetailAbilities } from '../../components/pokemon-detail-abilities/pokemon-detail-abilities';
import { PokemonDetailStats } from '../../components/pokemon-detail-stats/pokemon-detail-stats';
import { PokemonDetailMoves } from '../../components/pokemon-detail-moves/pokemon-detail-moves';

@Component({
  templateUrl: 'build/pages/pokemon-detail/pokemon-detail.html',
  providers: [ PokedexService ],
  pipes: [ Capitalize, PokeNumber ],
  directives: [
    PokemonDetailSprites,
    PokemonDetailAbilities,
    PokemonDetailStats,
    PokemonDetailMoves
  ]
})
export class PokemonDetailPage {

  private pokemon: any = {};

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private pokedexService: PokedexService
  ) {
    this.pokemon = navParams.data.pokemon;
  }

}
