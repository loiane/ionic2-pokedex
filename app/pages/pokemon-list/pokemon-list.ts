import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PokedexService } from '../../providers/pokedex-service/pokedex-service';
import { MovesService } from '../../providers/moves-service/moves-service';

import { Loader } from '../../components/loader/loader';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';
import { PokemonDetailPage } from '../pokemon-detail/pokemon-detail';

@Component({
  templateUrl: 'build/pages/pokemon-list/pokemon-list.html',
  providers: [ PokedexService, MovesService ],
  directives: [ Loader, PokemonListItem ]
})
export class PokemonListPage implements OnInit {

  private pokemonList: any[] = [];
  private searchQuery: string = '';

  private moves: any[] = [];

  constructor(
    private navCtrl: NavController,
    private pokedexService: PokedexService,
    private movesService: MovesService
  ) {}

  ngOnInit(){
    this.pokedexService.getAllPokemon()
      .subscribe(pokemonList => this.pokemonList = pokemonList);

    this.movesService.getMoves()
      .subscribe(moves => this.moves = moves);
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
      pokemon: event.pokemon,
      moves: this.moves
    });
  }

}
