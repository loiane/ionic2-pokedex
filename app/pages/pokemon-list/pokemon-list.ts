import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pokedex } from '../../providers/pokedex/pokedex';

/*
  Generated class for the PokemonListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/pokemon-list/pokemon-list.html',
  providers: [Pokedex]
})
export class PokemonListPage implements OnInit {

  private pokemonList: any[] = [];

  constructor(
    private navCtrl: NavController,
    private pokedex: Pokedex
  ) {}

  ngOnInit(){
    this.pokedex.getAllPokemon()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

}
