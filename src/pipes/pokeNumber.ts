import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'pokeNumber'
})
@Injectable()
export class PokeNumber {

  transform(value: string, args: any[]) {
    let max = 3;
    var s = value + '';
    while (s.length < max) s = '0' + s;
    return s;
  }
}
