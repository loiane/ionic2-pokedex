import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-detail-stats-item',
  templateUrl: 'build/components/pokemon-detail-stats-item/pokemon-detail-stats-item.html'
})
export class PokemonDetailStatsItem {

  @Input() text: string;
  @Input() value: number;
  @Input() classValue: string;

}
