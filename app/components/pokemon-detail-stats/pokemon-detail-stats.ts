import { Component, Input, OnChanges } from '@angular/core';

import { PokemonDetailStatsItem} from '../pokemon-detail-stats-item/pokemon-detail-stats-item';

@Component({
  selector: 'pokemon-detail-stats',
  templateUrl: 'build/components/pokemon-detail-stats/pokemon-detail-stats.html',
  directives: [ PokemonDetailStatsItem ]
})
export class PokemonDetailStats implements OnChanges {

  @Input() pokemon: any;

  hp: any;
  atk: any;
  def: any;
  spa: any;
  spd: any;
  spe: any;
  total: number;

  ngOnChanges(){
    if (this.pokemon){
      let infoList = this.pokemon.stats;
      let item: any;
      this.total = 0;
      for (let i=0; i<infoList.length; i++){
        item = infoList[i];

        if (item.stat.name === 'speed'){
          this.spe = item;
        } else if (item.stat.name === 'special-defense'){
          this.spd = item;
        } else if (item.stat.name === 'special-attack'){
          this.spa = item;
        } else if (item.stat.name === 'attack'){
          this.atk = item;
        } else if (item.stat.name === 'hp'){
          this.hp = item;
        } else if (item.stat.name === 'defense'){
          this.def = item;
        }

        this.total += item.base_stat;
      }
    }
  }
}
