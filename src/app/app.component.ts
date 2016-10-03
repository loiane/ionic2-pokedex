import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { AboutPage } from '../pages/about/about';
import { PokemonList } from '../pages/pokemon-list/pokemon-list';
import { TypeList } from '../pages/type-list/type-list';

@Component({
  template: `
  <ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

    </ion-menu>

    <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
  `
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = PokemonList;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

    this.pages = [
      { title: 'Pokedéx', component: PokemonList },
      { title: 'Pokémon Types', component: TypeList },
      { title: 'About', component: AboutPage }
    ];
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    //this.nav.push(page.component); //temporary - ios bug
  }
}
