import { Injectable } from '@angular/core';

export class Song {

  static SongCounter = 1;
  index: number;
  favorite = false;

  constructor(public title: string, public subtitle: string, public coverURL: string, public link: string) {
    this.index = Song.SongCounter;
    Song.SongCounter++;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SongAdapter {
  adapt(item: any): Song {
    const song = new Song(
      item.heading.title,
      item.heading.subtitle,
      item.images.default,
      item.url
    );
    song.favorite = false;
    return song;
  }
}
