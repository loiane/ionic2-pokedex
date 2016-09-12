import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import {PokemonListPage} from '../pokemon-list/pokemon-list';
import {AboutPage} from '../about/about';

@Component({
  templateUrl: 'build/pages/side-menu/side-menu.html'
})
export class SideMenuPage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = PokemonListPage;

  pages: Array<{title: string, component: any}>;

  constructor(private navCtrl: NavController) {
    this.pages = [
      { title: 'Pokedéx', component: PokemonListPage },
      { title: 'About', component: AboutPage }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
