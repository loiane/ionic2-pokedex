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
  private pokemons: any[] = [];
  private searchQuery: string = '';
  private start: number = 0;
  private limit: number = 15;

  constructor(
    private navCtrl: NavController,
    private pokedexService: PokedexService
  ) {}

  ngOnInit(){
    this.pokedexService.getAllPokemon()
      .subscribe(data => {
        this.pokemonList = data;
        this.loadData();
        //this.pokedexService.initData();
    });
  }

  loadData(){
    return new Promise(resolve => {
      let list = this.pokemonList.splice(this.start, this.start + this.limit);
      for (let item of list){
        this.pokemons.push(item);
      }
      resolve(true);
    });
  }

  getPokemons(){
    var q = this.searchQuery;
    if (q.trim() == '') {
        return this.pokemons;
    }
    return this.pokemonList.filter((v) => {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) >= 0) {
            return true;
        }
        return false;
    });
  }

  doInfinite(infiniteScroll:any) {
     console.log('doInfinite, start is currently '+this.start);

     if (this.start + this.limit < 151){
       this.start += this.limit;

       if (this.start == 150){
         this.start = 151;
       }

       this.loadData().then(()=>{
         infiniteScroll.complete();
       });
     } else {
       infiniteScroll.complete();
     }
  }

  goToPokemonDetail(event){
    this.navCtrl.push(PokemonDetail, {
      pokemon: event.pokemon
    });
  }

}
