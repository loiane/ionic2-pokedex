import { Component, Input, OnInit } from '@angular/core';

import { includes } from 'lodash';

import { PokemonDetailTypeEffectivenessRow } from '../pokemon-detail-type-effectiveness-row/pokemon-detail-type-effectiveness-row';

@Component({
  selector: 'pokemon-detail-type-effectiveness',
  templateUrl: 'build/components/pokemon-detail-type-effectiveness/pokemon-detail-type-effectiveness.html',
  directives: [ PokemonDetailTypeEffectivenessRow ]
})
export class PokemonDetailTypeEffectiveness implements OnInit {

  @Input() pokemon: any;
  @Input() types: any;

  private typesDetails: any[] = [];

  private doubleDamageFrom: any[] = [];
  private doubleDamageTo: any[] = [];
  private halfDamageFrom: any[] = [];
  private halfDamageTo: any[] = [];
  private noDamageFrom: any[] = [];
  private noDamageTo: any[] = [];

  ngOnInit(){
    let pokemonTypes: any[] = [];

    for (let i=0; i<this.pokemon.types.length; i++){
      let id = this.pokemon.types[i].type.url;
      id = id.replace("http://pokeapi.co/api/v2/type/", "");
      id = id.replace("/","");
      id--;
      this.typesDetails.push(this.types[id]);
    }
    this.retrieveTypeEffectiveness();
  }

  retrieveTypeEffectiveness() {
    let damageRelations: any;
    for (let i=0; i<this.typesDetails.length; i++){
      damageRelations = this.typesDetails[i].damage_relations;

      this.retrieveInfo(damageRelations.no_damage_to, this.noDamageTo);
      this.retrieveInfo(damageRelations.half_damage_to, this.halfDamageTo);
      this.retrieveInfo(damageRelations.double_damage_to, this.doubleDamageTo);
      this.retrieveInfo(damageRelations.no_damage_from, this.noDamageFrom);
      this.retrieveInfo(damageRelations.half_damage_from, this.halfDamageFrom);
      this.retrieveInfo(damageRelations.double_damage_from, this.doubleDamageFrom);
    }
  }

  retrieveInfo(listToIterate, listToAdd){
    for (let i=0; i<listToIterate.length; i++){
      let item = listToIterate[i];
      if (!this.contains(listToAdd, item)) {
        listToAdd.push(item);
      }
    }
  }

  contains(list, item){
    for (var i = 0; i < list.length; i++) {
        if (list[i].name === item.name) {
            return true;
        }
    }
    return false;
  }
}
