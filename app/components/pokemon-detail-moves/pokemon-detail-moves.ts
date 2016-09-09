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

        let list: any[] = item.version_group_details;
        let groupDetails;
        //console.log(type.move_learn_method.name);

        if (type.move_learn_method.name === 'egg'){

          for (let i=0; i<list.length; i++){
            groupDetails = list[i];
            if (this.isGenerationIV(groupDetails) ||
                this.isGenerationVI(groupDetails)){
              this.egg.push(item);
              break;
            }
          }

        } else if (type.move_learn_method.name === 'machine'){
          this.tm.push(item);
        } else if (type.move_learn_method.name === 'tutor'){

          for (let i=0; i<list.length; i++){
            groupDetails = list[i];
            if (this.isGenerationIV(groupDetails) ||
                this.isGenerationVI(groupDetails)){
              this.tutor.push(item);
              break;
            }
          }

        } else if (type.move_learn_method.name === 'level-up'){

          let minLvl = 10000;

          for (let i=0; i<list.length; i++){
            groupDetails = list[i];
            if (this.isGenerationIV(groupDetails)){
              minLvl = groupDetails.level_learned_at;
              //console.log(item.move.name + ' ' + groupDetails.level_learned_at
              //+ ' - ' + groupDetails.version_group.name);
              break;
            }
          }

          item.level_learned_at = minLvl;

          this.levelUp.push(item);
        }
      }

      this.sortLevelUp();
      this.sortAlphabetically(this.egg);
      this.sortAlphabetically(this.tutor);
    }
  }

  isGenerationIV(groupDetails){
    if (groupDetails.version_group.name === 'platinum'
     || groupDetails.version_group.name === 'diamond-pearl'
     || groupDetails.version_group.name === 'heartgold-soulsilver'){
      return true;;
    }
    return false;
  }

  isGenerationVI(groupDetails){
    if (groupDetails.version_group.name === 'x-y'
     || groupDetails.version_group.name === 'omega-ruby-alpha-sapphire'){
      return true;;
    }
    return false;
  }

  sortLevelUp(){
    this.levelUp.sort(function(a, b){
      return a.level_learned_at - b.level_learned_at;
    });
  }

  sortAlphabetically(list){
    list.sort(function(a, b){
      if (a.move.name < b.move.name){
          return -1;
      } else if (a.move.name > b.move.name){
          return 1;
      } else {
          return 0;
      }
    });
  }
}
