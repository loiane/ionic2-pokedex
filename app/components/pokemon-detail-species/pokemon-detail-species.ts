import { Component, Input, OnInit } from '@angular/core';

import { PokedexService } from '../../providers/pokedex-service/pokedex-service';
import { Capitalize } from '../../pipes/capitalize';
import { PokeNumber } from '../../pipes/pokeNumber';
import { PokemonDetailTypeEffectiveness } from '../pokemon-detail-type-effectiveness/pokemon-detail-type-effectiveness';

@Component({
  selector: 'pokemon-detail-species',
  templateUrl: 'build/components/pokemon-detail-species/pokemon-detail-species.html',
  providers: [ PokedexService ],
  pipes: [ Capitalize, PokeNumber ],
  directives: [ PokemonDetailTypeEffectiveness ]
})
export class PokemonDetailSpecies implements OnInit {

  @Input() pokemon: any;
  @Input() types: any;
  speciesDetails: any;

  tab: string = 'pokedex';

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(){
    this.pokedexService.getSpecies(null)
      .subscribe(speciesDetails => this.speciesDetails = speciesDetails);
  }

  getHeight(){
    return this.pokemon.height / 10;
  }

  getWeight(){
    return this.pokemon.weight / 10;
  }

  getGender(){
    let femalePerc = this.speciesDetails.gender_rate / 0.08;
    let malePerc = 100 - femalePerc;
    return malePerc + '% male, ' + femalePerc + '% female';
  }

  getSpeciesName(){
    if (this.speciesDetails){
      let listNames = this.speciesDetails.genera;
      for (let i=0; i<listNames.length; i++){
        if (listNames[i].language.name === 'en'){
          return listNames[i].genus;
        }
      }
    }
    return undefined;
  }

  getDescription(){
    if (this.speciesDetails){
      let list = this.speciesDetails.flavor_text_entries;
      for (let i=0; i<list.length; i++){
        if (list[i].language.name === 'en'){
          return list[i].flavor_text;
        }
      }
    }
    return undefined;
  }
}
