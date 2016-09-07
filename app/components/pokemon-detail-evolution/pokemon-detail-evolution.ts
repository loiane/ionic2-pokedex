import { Component } from '@angular/core';

/*
  Generated class for the PokemonDetailEvolution component.

  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'pokemon-detail-evolution',
  templateUrl: 'build/components/pokemon-detail-evolution/pokemon-detail-evolution.html'
})
export class PokemonDetailEvolution {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }
}
