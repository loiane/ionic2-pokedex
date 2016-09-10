import { Component, Input } from '@angular/core';

import { Capitalize } from '../../pipes/capitalize';

@Component({
  selector: 'pokemon-detail-move-detail-row',
  templateUrl: 'build/components/pokemon-detail-move-detail-row/pokemon-detail-move-detail-row.html',
  pipes: [ Capitalize]
})
export class PokemonDetailMoveDetailRow {

  @Input() move: any;
  @Input() moveDetails: any;
  @Input() levelUp: boolean = false;

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
