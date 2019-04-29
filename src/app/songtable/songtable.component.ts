import { map } from 'rxjs/operators';
import { Song, SongAdapter } from './../song.model';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songtable',
  templateUrl: './songtable.component.html',
  styleUrls: ['./songtable.component.css']
})
export class SongtableComponent implements OnInit {

  searchString: string;
  rawList: Song[];
  songList: Song[];
  dispColumns = ['index', 'info', ]

  constructor(private http: DataService, private adapter: SongAdapter) {
    this.getRawList();
  }

  ngOnInit() {
  }

  getRawList() {
    this.http.getList().subscribe(s => { this.rawList = s; },
      error => console.error(error), () => { console.log(this.rawList); this.convertToSongList(); });
  }

  convertToSongList() {
// tslint:disable-next-line: no-string-literal
    this.songList = this.rawList['chart'].map(item => this.adapter.adapt(item));
    console.log(this.songList);
  }
}


