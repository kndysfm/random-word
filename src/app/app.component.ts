import { Component, VERSION } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  minLevel: number = 0.5;
  maxLevel: number = 2.5;
  options: Options = {
    floor: 0.0,
    ceil: 4.0,
    step: 0.1,
    minRange: 0.1,
    maxRange: 5.0
  };
}
