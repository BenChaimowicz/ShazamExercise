import { Injectable } from '@angular/core';

export class Song {

  index: number;

  constructor(public title: string, public subtitle: string, public coverURL: string) {
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
