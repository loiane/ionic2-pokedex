import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'divBy10'
})
@Injectable()
export class DivBy10 {
  
  transform(value: string, args: any[]) {
    let num = parseInt(value) / 10;
    value = num + ''; // make sure it's a string
    return value;
  }
}
