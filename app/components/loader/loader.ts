import { Component, Input } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: 'build/components/loader/loader.html'
})
export class Loader {

  @Input() text: string;
}
