import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PokedexService } from '../../providers/pokedex-service/pokedex-service';
import { Capitalize } from '../../pipes/capitalize';

@Component({
  selector: 'pokemon-list-item',
  templateUrl: 'build/pages/pokemon-list-item/pokemon-list-item.html',
  providers: [ PokedexService ],
  pipes: [ Capitalize ]
})
export class PokemonListItem {

  @Input() pokemon: any;
  @Input() num: number;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  getPokemonTypes(){
    let types: any[] = [];
    if (this.pokemon && this.pokemon.types) {
      let type: any;
      for (let i=0; i<this.pokemon.types.length; i++){
        type = this.pokemon.types[i];
        if (type){
          types.splice((type.slot-1), 0, type);
        }
      }
    }
    if (types.length > 0){
      this.pokemon.types = types;
    }
    return types;
  }

  goToPokemonDetail(){
    this.clicked.emit({pokemon: this.pokemon});
  }
}
