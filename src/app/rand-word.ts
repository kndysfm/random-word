import { Word, words } from './words';
import { PartOfSpeech } from './pos';

export class RandomWord {
  private nounList: Word[] = [];
  private verbList: Word[] = [];
  private adjectiveList: Word[] = [];

  constructor() {
    words.forEach(w => {
      if (w.isNoun) {
        this.nounList.push(w);
      }
      if (w.isVerb) {
        this.verbList.push(w);
      }
      if (w.isAdjective) {
        this.adjectiveList.push(w);
      }
    });
  }

  private selList(pos: PartOfSpeech): Word[] {
    switch (pos) {
    case PartOfSpeech.noun: return this.nounList;
    case PartOfSpeech.verb: return this.verbList;
    case PartOfSpeech.adjective: return this.adjectiveList; 
    }
  }

  rand(pos: PartOfSpeech, levelMax: number, levelMin: number): Word {
    var list: Word[] = this.selList(pos);
    if (!list) return null;

    var idxMin: number = Number.MAX_VALUE;
    var idxMax: number = Number.MIN_VALUE;
    for (let idx = 0; idx < list.length; idx++) {
      if (list[idx].level <= levelMax) {
        idxMin = idx;
        break;
      }
    }
    for (let idx = list.length - 1; idx >= 0; idx--) {
      if (list[idx].level >= levelMin) {
        idxMax = idx + 1;
        break;
      }
    }
    if (idxMin < idxMax) {
      var rand = Math.random();
      var idx = idxMin + Math.floor(rand * (idxMax - idxMin));
      return list[idx];
    }
    return null;
  }
}