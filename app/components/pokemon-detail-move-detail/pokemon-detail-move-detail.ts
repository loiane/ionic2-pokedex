import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon-detail-move-detail',
  templateUrl: 'build/components/pokemon-detail-move-detail/pokemon-detail-move-detail.html'
})
export class PokemonDetailMoveDetail {

  @Input() move: any;
  @Input() moves: any[];
  @Input() levelUp: boolean = false;

  moveDetails: any;

  ngOnInit(){
    this.getMoveDetails();
  }

  getMoveDetails(){
    let id = this.move.move.url;
    id = id.replace("http://pokeapi.co/api/v2/move/", "");
    id = id.replace("/","");
    this.moveDetails = this.moves[id--];
    //console.log(this.moveDetails);
  }

  getName(){
    if (this.moveDetails){
      let listNames = this.moveDetails.names;
      for (let i=0; i<listNames.length; i++){
        if (listNames[i].language.name === 'en'){
          return listNames[i].name;
        }
      }
    }
    return undefined;
  }

}
