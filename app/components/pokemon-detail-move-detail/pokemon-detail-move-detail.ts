import { Component, Input } from '@angular/core';

import { PokemonDetailMoveDetailRow } from '../pokemon-detail-move-detail-row/pokemon-detail-move-detail-row';

@Component({
  selector: 'pokemon-detail-move-detail',
  templateUrl: 'build/components/pokemon-detail-move-detail/pokemon-detail-move-detail.html',
  directives: [ PokemonDetailMoveDetailRow ]
})
export class PokemonDetailMoveDetail {

  @Input() list: any[];
  @Input() moves: any[];
  @Input() levelUp: boolean = false;

  getMoveDetails(move){
    let id = move.move.url;
    id = id.replace("http://pokeapi.co/api/v2/move/", "");
    id = id.replace("/","");
    id--;
    return this.moves[id];
    //console.log(this.moveDetails);
  }
}
