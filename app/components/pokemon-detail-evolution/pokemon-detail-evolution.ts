import { Component, Input, OnInit } from '@angular/core';

import { PokedexService } from '../../providers/pokedex-service/pokedex-service';
import { Capitalize } from '../../pipes/capitalize';
import { PokeNumber } from '../../pipes/pokeNumber';

@Component({
  selector: 'pokemon-detail-evolution',
  templateUrl: 'build/components/pokemon-detail-evolution/pokemon-detail-evolution.html',
  providers: [ PokedexService ],
  pipes: [ Capitalize, PokeNumber ]
})
export class PokemonDetailEvolution implements OnInit {

    @Input() pokemon: any;
    evolutionDetails: any;
    evolutions: any[] = [];

    constructor(private pokedexService: PokedexService) {}

    ngOnInit(){
      this.pokedexService.getEvolutions()
        .subscribe(evolutionDetails => this.evolutionDetails = evolutionDetails);
    }

    getEvolutions(){
      if (this.evolutionDetails && this.evolutionDetails.chain
        && this.evolutions.length == 0){
        let item = this.evolutionDetails.chain.evolves_to[0];
        while (item){
          let ev: any = {};
          ev.name = item.species.name;
          ev.id = item.species.url.replace("http://pokeapi.co/api/v2/pokemon-species/", "");
          ev.id = ev.id.replace("/","");
          ev.level = item.evolution_details[0].min_level;
          this.evolutions.push(ev);
          item = item.evolves_to[0];
        }

      }
      return this.evolutions;
    }
}
