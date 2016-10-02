import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-detail-stats-item',
  templateUrl: 'pokemon-detail-stats-item.html'
})
export class PokemonDetailStatsItem {

  @Input() text: string;
  @Input() value: number;
  @Input() classValue: string;

}
