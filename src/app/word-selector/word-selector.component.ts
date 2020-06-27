import { Component, OnInit } from '@angular/core';
import { RandomWord } from '../rand-word';
import { PartOfSpeech } from '../pos';

@Component({
  selector: 'app-word-selector',
  templateUrl: './word-selector.component.html',
  styleUrls: ['./word-selector.component.css'],
})
export class WordSelectorComponent implements OnInit {
  word: string;
  randWord: RandomWord;
  minLevel: number;

  _posSelected: PartOfSpeech;
  set posSelected(p:PartOfSpeech) {
    this._posSelected = p;
    this.update();
  }
  get posSelected(): PartOfSpeech {
    return this._posSelected;
  }

  posType: typeof PartOfSpeech = PartOfSpeech;

  constructor() { 
    this.randWord = new RandomWord();
  }

  ngOnInit() {
    this.update();
  }

  update() {
    var w = this.randWord.rand(this.posSelected, 2.0, 0.5);
    this.word = (w != null)? w.text: "NULL!!";
  }

}