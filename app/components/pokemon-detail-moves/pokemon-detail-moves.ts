import { Component, Input } from '@angular/core';

import { includes } from 'lodash';

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
      for (let i=0; i<infoList.length; i++){
        item = infoList[i];
        let list: any[] = item.version_group_details;
        let groupDetails;

        for (let i=0; i<list.length; i++){
          groupDetails = list[i];

          if (groupDetails.move_learn_method.name === 'egg'){

            this.addIfGenerationIVorVI(groupDetails, item, this.egg);

          } else if (groupDetails.move_learn_method.name === 'machine'){
            this.tm.push(item);
          } else if (groupDetails.move_learn_method.name === 'tutor'){

            if (this.isGenerationVI(groupDetails)){
              item.level_learned_at = groupDetails.level_learned_at;
              this.addUnique(this.tutor, item);
            }

          } else if (groupDetails.move_learn_method.name === 'level-up'){

            //console.log(item.move.name + ' - ' + groupDetails.version_group.name + ' - ' + groupDetails.level_learned_at);

            if (this.isGenerationIV(groupDetails)){
              item.level_learned_at = groupDetails.level_learned_at;
              this.addUnique(this.levelUp, item);
            }
          }

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

  addIfGenerationIVorVI(groupDetails, item, list){
    if (this.isGenerationIV(groupDetails) ||
        this.isGenerationVI(groupDetails)){
      this.addUnique(list, item);
    }
  }

  addUnique(list, item){
    if (!includes(list, item)) {
      list.push(item);
    }
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
