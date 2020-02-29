export interface furigana {
  kanji: string;
  furi: string;
}
export interface FrontJapanese {
  text: string;
  hiragana: string;
  furigana: furigana[];
}

export interface BackJapanese {
  english: string;
}

export interface Japanese extends FrontJapanese, BackJapanese {
  index: number;
  tags: string[];
}
