import { Injectable, Pipe } from '@angular/core';

import { capitalize } from 'lodash';

@Pipe({
  name: 'capitalize'
})
@Injectable()
export class Capitalize {

  transform(value: string, args: any[]) {
    return capitalize(value);
  }
}
