import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { PokemonList } from '../pokemon-list/pokemon-list';
import { TypeList } from '../type-list/type-list';

@Component({
  templateUrl: 'side-menu.html'
})
export class SideMenuPage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = PokemonList;

  pages: Array<{title: string, component: any}>;

  constructor(private navCtrl: NavController) {
    this.pages = [
      { title: 'Pokedéx', component: PokemonList },
      { title: 'Pokémon Types', component: TypeList },
      { title: 'About', component: AboutPage }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
