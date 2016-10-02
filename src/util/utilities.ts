import { Injectable } from '@angular/core';

@Injectable()
export class Utilities {

  private urlPrefix = 'http://pokeapi.co/api/v2/';

  retrieveIdFromUrl(url: string, apiName: string): number {
    let id = url;
    id = id.replace(this.urlPrefix + apiName, '');
    id = id.replace('/','');
    return parseInt(id);
  }

  containsByName(list, item){
    for (var i = 0; i < list.length; i++) {
        if (list[i].name === item.name) {
            return true;
        }
    }
    return false;
  }

  contains(list, item){
    if (list.indexOf(item) >= 0) {
        return true;
    }
    return false;
  }

  getTranslatedName(list){
    for (let i=0; i<list.length; i++){
      if (list[i].language.name === 'en'){
        return list[i].flavor_text;
      }
    }
  }
}
