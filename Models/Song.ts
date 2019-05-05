export class Song {

  index: number;
  title: string;
  subtitle: string;
  coverURL: string;
  link: string;
  favorite: boolean;

  constructor(i, t, s, c, l) {
    this.index = i;
    this.title = t;
    this.subtitle = s;
    this.coverURL = c;
    this.link = l;
  }

}

