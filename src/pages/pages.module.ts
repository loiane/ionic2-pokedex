import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { PokemonList } from '../pages/pokemon-list/pokemon-list';
import { PokedexService } from '../providers/pokedex-service';
import { PipesModule } from '../pipes/pipes.module';
import { Loader } from '../components/loader/loader';
import { PokemonListItem } from '../components/pokemon-list-item/pokemon-list-item';
import { PokemonDetail } from '../pages/pokemon-detail/pokemon-detail';
import { TypeList } from '../pages/type-list/type-list';
import { PokemonDetailsModule } from '../components/pokemon-details/pokemon-details.module';

export const APP_PAGES = [
  SideMenuPage,
  PokemonList,
  AboutPage,
  PokemonDetail,
  TypeList
];

@NgModule({
    imports: [
      CommonModule,
      PipesModule,
      PokemonDetailsModule,
      IonicModule.forRoot(PokemonList),
      IonicModule.forRoot(PokemonDetail),
      IonicModule.forRoot(TypeList),
    ],
    declarations: [
      APP_PAGES,
      Loader,
      PokemonListItem
    ],
    exports: [
      APP_PAGES
    ],
    providers: [PokedexService]
})
export class PagesModule { }
