import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PagesModule, APP_PAGES } from '../pages/pages.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    CommonModule,
    PagesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    APP_PAGES
  ]
})
export class AppModule {}
