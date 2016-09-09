import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-detail-move-detail',
  templateUrl: 'build/components/pokemon-detail-move-detail/pokemon-detail-move-detail.html'
})
export class PokemonDetailMoveDetail {

  @Input() list: any[];
  @Input() isEgg: boolean = false;

  ngOnInit(){
    //console.log(this.list);
  }
}
