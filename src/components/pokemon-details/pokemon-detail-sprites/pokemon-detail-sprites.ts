import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-detail-sprites',
  templateUrl: 'pokemon-detail-sprites.html'
})
export class PokemonDetailSprites {

  @Input() pokemon: any;
}
