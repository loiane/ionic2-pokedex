import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PokedexService } from '../../providers/pokedex-service/pokedex-service';
import { Capitalize } from '../../pipes/capitalize';
import { PokeNumber } from '../../pipes/pokeNumber';

@Component({
  templateUrl: 'build/pages/pokemon-detail/pokemon-detail.html',
  providers: [ PokedexService ],
  pipes: [ Capitalize, PokeNumber ]
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
