import { Component, Input } from '@angular/core';

import { PokemonDetailMoveDetail } from '../pokemon-detail-move-detail/pokemon-detail-move-detail';

@Component({
  selector: 'pokemon-detail-moves',
  templateUrl: 'build/components/pokemon-detail-moves/pokemon-detail-moves.html',
  directives: [ PokemonDetailMoveDetail ]
})
export class PokemonDetailMoves {

  @Input() pokemon: any;

  move: string = 'levelUp';

  levelUp: any[] = [];
  egg: any[] = [];
  hm: any[] = [];
  tm: any[] = [];
  tutor: any[] = [];
  transfer: any[] = [];
  other: any[] = [];

  ngOnInit(){
    if (this.pokemon){
      let infoList = this.pokemon.moves;
      let item: any;
      let type: any;
      for (let i=0; i<infoList.length; i++){
        item = infoList[i];
        type = item.version_group_details[0];

        //console.log(type.move_learn_method.name);

        if (type.move_learn_method.name === 'egg'){
          this.egg.push(item);
        } else if (type.move_learn_method.name === 'machine'){
          this.tm.push(item);
        } else if (type.move_learn_method.name === 'tutor'){
          this.tutor.push(item);
        } else if (type.move_learn_method.name === 'level-up'){
          this.levelUp.push(item);
        }
      }
    }
  }

}
