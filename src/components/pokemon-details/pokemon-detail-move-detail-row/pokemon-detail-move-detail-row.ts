import { Component, Input, OnInit } from '@angular/core';

import { PokedexService } from '../../../providers/pokedex-service';
import { Utilities } from '../../../util/utilities';

@Component({
  selector: 'pokemon-detail-move-detail-row',
  templateUrl: 'pokemon-detail-move-detail-row.html'
})
export class PokemonDetailMoveDetailRow implements OnInit {

  @Input() move: any;
  @Input() levelUp: boolean = false;
  moveDetails: any;

  constructor(
    private pokedexService: PokedexService,
    private util: Utilities
  ) {}

  ngOnInit(){
    let id: number = this.util.retrieveIdFromUrl(this.move.move.url, 'move');
    this.pokedexService.getMove(id)
      .subscribe(moveDetails => this.moveDetails = moveDetails);
  }

  getName(){
    if (this.moveDetails){
      let listNames = this.moveDetails.names;
      for (let i=0; i<listNames.length; i++){
        if (listNames[i].language.name === 'en'){
          return listNames[i].name;
        }
      }
    }
    return undefined;
  }

  getPower(){
    if (this.moveDetails){
      return this.moveDetails.power === null ? '-' : this.moveDetails.power;
    }
    return '-'
  }

  getAccuracy(){
    if (this.moveDetails){
      return this.moveDetails.accuracy === null ? '-' : this.moveDetails.accuracy;
    }
    return '-'
  }
}
