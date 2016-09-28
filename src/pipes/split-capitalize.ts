import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'splitCapitalize'
})
@Injectable()
export class SplitCapitalize {

  transform(value: string, args: any[]) {

    let values = value.split('-');
    let result = '';

    for (let i=0; i<values.length; i++){
      result += values[i].substr(0,1).toUpperCase() +
        values[i].substr(1).toLowerCase() + ' ';
    }

    return result;
  }
}
