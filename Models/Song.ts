export class Song {

  index: number;
  title: string;
  subtitle: string;
  coverURL: string;
  link: string;
  favorite: boolean;

  constructor(i: number, t: string, s: string, c: string, l: string) {
    this.index = i;
    this.title = t;
    this.subtitle = s;
    this.coverURL = c;
    this.link = l;
    this.favorite = false;
  }

}

