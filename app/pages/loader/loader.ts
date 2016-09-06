import { Component, Input } from '@angular/core';

@Component({
  templateUrl: 'build/pages/loader/loader.html',
})
export class Loader {

  @Input() text: string;

}
