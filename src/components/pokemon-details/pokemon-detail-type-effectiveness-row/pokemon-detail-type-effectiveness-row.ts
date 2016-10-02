import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-detail-type-effectiveness-row',
  templateUrl: 'pokemon-detail-type-effectiveness-row.html'
})
export class PokemonDetailTypeEffectivenessRow {

  @Input() text: string;
  @Input() list: any[];
}
