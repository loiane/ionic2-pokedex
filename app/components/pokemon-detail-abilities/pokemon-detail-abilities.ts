import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Capitalize } from '../../pipes/capitalize';
import { Utilities } from '../../util/utilities';
import { AbilityDetailPage } from '../../pages/ability-detail/ability-detail';

@Component({
  selector: 'pokemon-detail-abilities',
  templateUrl: 'build/components/pokemon-detail-abilities/pokemon-detail-abilities.html',
  pipes: [ Capitalize ]
})
export class PokemonDetailAbilities {

  @Input() pokemon: any;

  constructor(
    private navCtrl: NavController,
    private util: Utilities
  ) {}

  getPokemonAbilities(){
    let list: any[] = [];
    let infoList = this.pokemon.abilities;
    if (this.pokemon && infoList) {
      let item: any;
      for (let i=0; i<infoList.length; i++){
        item = infoList[i];
        if (item){
          list.splice((item.slot-1), 0, item);
        }
      }
    }
    if (list.length > 0){
      this.pokemon.abilities = list;
    }
    return list;
  }

  goToDetail(ability){
    let id: number = this.util.retrieveIdFromUrl(ability.ability.url, 'ability');
    this.navCtrl.push(AbilityDetailPage, {
      id: id
    });
  }
}
