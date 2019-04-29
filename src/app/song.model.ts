import { Injectable } from '@angular/core';

export class Song {

  static SongCounter = 1;
  index: number;

  constructor(public title: string, public subtitle: string, public coverURL: string) {
    this.index = Song.SongCounter;
    Song.SongCounter++;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SongAdapter {
  adapt(item: any): Song {
    return new Song(
      item.heading.title,
      item.heading.subtitle,
      item.images.default
    );
  }
}
