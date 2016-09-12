import { Injectable, Pipe } from '@angular/core';

import { capitalize } from 'lodash';

@Pipe({
  name: 'splitCapitalize'
})
@Injectable()
export class SplitCapitalize {

  transform(value: string, args: any[]) {

    let values = value.split('-');
    let result = '';

    for (let i=0; i<values.length; i++){
      result += capitalize(values[i]) + ' ';
    }

    return result;
  }
}
