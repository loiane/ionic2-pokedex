import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PokedexService } from '../../providers/pokedex-service';
import { Capitalize } from '../../pipes/capitalize';
import { PokeNumber } from '../../pipes/pokeNumber';
import { PokemonImage } from '../../pipes/pokemon-image';
//import { PokemonDetailSpecies } from '../../components/pokemon-detail-species/pokemon-detail-species';
//import { PokemonDetailSprites } from '../../components/pokemon-detail-sprites/pokemon-detail-sprites';
//import { PokemonDetailAbilities } from '../../components/pokemon-detail-abilities/pokemon-detail-abilities';
//import { PokemonDetailStats } from '../../components/pokemon-detail-stats/pokemon-detail-stats';
//import { PokemonDetailEvolution } from '../../components/pokemon-detail-evolution/pokemon-detail-evolution';
//import { PokemonDetailMoves } from '../../components/pokemon-detail-moves/pokemon-detail-moves';

@Component({
  templateUrl: 'pokemon-detail.html'
})
export class PokemonDetail implements OnInit {

  private pokemon: any = {};

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private pokedexService: PokedexService
  ) {  }

  ngOnInit() {
    this.pokemon = this.navParams.data.pokemon;
  }

  getId(){
    return this.pokemon.id;
  }

  goToPreviousPokemon(){
    //console.log('currentId = ' + this.getId());
    if (this.getId() >= 2){
      let newId = this.getId() - 1;
      //console.log('newid = ' + newId);
      this.changePokemonData(newId);
    }
  }

  goToNextPokemon(){
    //console.log('currentId = ' + this.getId());
    if (this.getId() < 151){
      let newId = this.getId() + 1;
      //console.log('newid = ' + newId);
      this.changePokemonData(newId);
    }
  }

  private changePokemonData(id: number){
    this.pokedexService.getPokemon(id)
      .subscribe(data => this.pokemon = data);
  }

}
