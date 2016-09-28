import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PokedexService } from '../../providers/pokedex-service';

@Component({
  templateUrl: 'ability-detail.html',
})
export class AbilityDetailPage {

  ability: any = {};

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private pokedexService: PokedexService
  ) {  }

  ngOnInit() {
    let id = this.navParams.data.id;
    this.pokedexService.getAbility(id)
      .subscribe(data => {
        this.ability = data;
        console.log(this.ability);
      });
  }

}
