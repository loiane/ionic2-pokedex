import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-detail-move-detail',
  templateUrl: 'build/components/pokemon-detail-move-detail/pokemon-detail-move-detail.html'
})
export class PokemonDetailMoveDetail {

  @Input() list: any[];

  ngOnInit(){
    console.log(this.list);
  }
}
