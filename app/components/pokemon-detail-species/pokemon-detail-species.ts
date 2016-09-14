import { Component, Input, OnChanges } from '@angular/core';

import { PokedexService } from '../../providers/pokedex-service/pokedex-service';
import { Capitalize } from '../../pipes/capitalize';
import { SplitCapitalize } from '../../pipes/split-capitalize';
import { DivBy10 } from '../../pipes/div-by-10';
import { PokemonGender } from '../../pipes/pokemon-gender';
import { Utilities } from '../../util/utilities';
import { PokeNumber } from '../../pipes/pokeNumber';
import { PokemonDetailTypeEffectiveness } from '../pokemon-detail-type-effectiveness/pokemon-detail-type-effectiveness';

@Component({
  selector: 'pokemon-detail-species',
  templateUrl: 'build/components/pokemon-detail-species/pokemon-detail-species.html',
  pipes: [ Capitalize, PokeNumber, SplitCapitalize, DivBy10, PokemonGender ],
  directives: [ PokemonDetailTypeEffectiveness ]
})
export class PokemonDetailSpecies implements OnChanges {

  @Input() pokemon: any;
  private speciesDetails: any;
  private tab: string = 'pokedex';
  speciesName: string;
  description: string;

  constructor(
    private pokedexService: PokedexService,
    private util: Utilities
  ) {}

  ngOnChanges(){
    let speciesId: number = this.util.retrieveIdFromUrl(this.pokemon.species.url, 'pokemon-species');
    this.pokedexService.getSpecies(speciesId)
      .subscribe(data => this.initSpeciesData(data));
  }

  initSpeciesData(data){
    this.speciesDetails = data;
    this.speciesName = this.util.getTranslatedName(this.speciesDetails.genera);
    this.description = this.util.getTranslatedName(this.speciesDetails.flavor_text_entries);
  }
}
