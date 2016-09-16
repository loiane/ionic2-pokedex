import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PokedexService } from '../../providers/pokedex-service/pokedex-service';

import { Loader } from '../../components/loader/loader';
import { PokemonListItem } from '../../components/pokemon-list-item/pokemon-list-item';
import { PokemonDetailPage } from '../pokemon-detail/pokemon-detail';

@Component({
  templateUrl: 'build/pages/pokemon-list/pokemon-list.html',
  directives: [ Loader, PokemonListItem ]
})
export class PokemonListPage implements OnInit {

  private pokemonList: any[] = [];
  private searchQuery: string = '';

  constructor(
    private navCtrl: NavController,
    private pokedexService: PokedexService
  ) {}

  ngOnInit(){
    this.pokedexService.getAllPokemon()
      .subscribe(pokemonList => {
        this.pokemonList = pokemonList;
        this.pokedexService.initData();
      });
  }

  getPokemons(){
    var q = this.searchQuery;
    if (q.trim() == '') {
        return this.pokemonList;
    }
    return this.pokemonList.filter((v) => {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
            return true;
        }
        return false;
    });
  }

  goToPokemonDetail(event){
    this.navCtrl.push(PokemonDetailPage, {
      pokemon: event.pokemon
    });
  }

}
