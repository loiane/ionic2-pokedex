import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PokedexService } from '../../providers/pokedex-service';
import { Capitalize } from '../../pipes/capitalize';

import { Loader } from '../../components/loader/loader';

@Component({
  templateUrl: 'type-list.html'
})
export class TypeList {

  private types: any[] = [];

  constructor(
    private navCtrl: NavController,
    private pokedexService: PokedexService
  ) {}

  ngOnInit(){
    this.pokedexService.getTypes()
      .subscribe(types => this.types = types);
  }

}
