import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { PokemonList } from '../pages/pokemon-list/pokemon-list';
import { PokedexService } from '../providers/pokedex-service';
import { PipesModule } from '../pipes/pipes.module';
import { Loader } from '../components/loader/loader';
import { PokemonListItem } from '../components/pokemon-list-item/pokemon-list-item';
import { PokemonDetail } from '../pages/pokemon-detail/pokemon-detail';
import { TypeList } from '../pages/type-list/type-list';

@NgModule({
  declarations: [
    MyApp,
    SideMenuPage,
    PokemonList,
    AboutPage,
    Loader,
    PokemonListItem,
    PokemonDetail,
    TypeList
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SideMenuPage,
    PokemonList,
    AboutPage,
    TypeList
  ],
  providers: [PokedexService]
})
export class AppModule {}
