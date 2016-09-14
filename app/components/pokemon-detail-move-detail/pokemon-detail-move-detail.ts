import { Component, Input } from '@angular/core';

import { PokemonDetailMoveDetailRow } from '../pokemon-detail-move-detail-row/pokemon-detail-move-detail-row';

@Component({
  selector: 'pokemon-detail-move-detail',
  templateUrl: 'build/components/pokemon-detail-move-detail/pokemon-detail-move-detail.html',
  directives: [ PokemonDetailMoveDetailRow ]
})
export class PokemonDetailMoveDetail {

  @Input() pokemon: any;
  @Input() list: any[];
  @Input() levelUp: boolean = false;
}
