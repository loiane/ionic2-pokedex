import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-detail-move-detail',
  templateUrl: 'pokemon-detail-move-detail.html'
})
export class PokemonDetailMoveDetail {

  @Input() pokemon: any;
  @Input() list: any[];
  @Input() levelUp: boolean = false;
}
