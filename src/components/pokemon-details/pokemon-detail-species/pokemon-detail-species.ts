import { Component, Input, OnChanges } from '@angular/core';

import { PokedexService } from '../../../providers/pokedex-service';
import { Utilities } from '../../../util/utilities';

@Component({
  selector: 'pokemon-detail-species',
  templateUrl: 'pokemon-detail-species.html'
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
