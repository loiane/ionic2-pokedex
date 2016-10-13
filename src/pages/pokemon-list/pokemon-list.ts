import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PokedexService } from '../../providers/pokedex-service';
import { PokemonDetail } from '../pokemon-detail/pokemon-detail';

@Component({
  selector: 'page-pokemon-list',
  templateUrl: 'pokemon-list.html'
})
export class PokemonList implements OnInit {

  private pokemonList: any[] = [];
  private searchQuery: string = '';

  constructor(
    private navCtrl: NavController,
    private pokedexService: PokedexService
  ) {}

  ngOnInit(){
    this.pokedexService.getAllPokemon()
      .subscribe(data => {
        this.pokemonList = data;
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
    this.navCtrl.push(PokemonDetail, {
      pokemon: event.pokemon
    });
  }

}
