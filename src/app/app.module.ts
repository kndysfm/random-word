import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

import { AppComponent } from './app.component';
import { WordSelectorComponent } from './word-selector/word-selector.component';
import { RandomWord } from './rand-word';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng5SliderModule ],
  declarations: [ AppComponent,  WordSelectorComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
