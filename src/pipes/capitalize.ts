import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
@Injectable()
export class Capitalize {
  
  transform(value, args) {
    value = value.substr(0,1).toUpperCase() +
      value.substr(1).toLowerCase();
    return value;
  }
}
