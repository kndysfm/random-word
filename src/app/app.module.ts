import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WordSelectorComponent } from './word-selector/word-selector.component';
import { RandomWord } from './rand-word';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,  WordSelectorComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
