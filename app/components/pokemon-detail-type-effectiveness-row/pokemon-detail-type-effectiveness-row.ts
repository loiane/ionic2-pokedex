import { Component, Input } from '@angular/core';

import { Capitalize } from '../../pipes/capitalize';

@Component({
  selector: 'pokemon-detail-type-effectiveness-row',
  templateUrl: 'build/components/pokemon-detail-type-effectiveness-row/pokemon-detail-type-effectiveness-row.html',
  pipes: [ Capitalize ]
})
export class PokemonDetailTypeEffectivenessRow {

  @Input() text: string;
  @Input() list: any[];
}
