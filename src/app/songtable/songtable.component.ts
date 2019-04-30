import { map } from 'rxjs/operators';
import { Song, SongAdapter } from './../song.model';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-songtable',
  templateUrl: './songtable.component.html',
  styleUrls: ['./songtable.component.css']
})
export class SongtableComponent implements OnInit {

  rawList: Song[];
  songList: Song[];
  dispColumns = ['index', 'cover', 'info', 'link', 'action'];
  isLoaded = false;
  dataSource: MatTableDataSource<Song>;

  constructor(private http: DataService, private adapter: SongAdapter) {
    this.getRawList();
  }

  ngOnInit() {
  }

  getRawList() {
    this.http.getList().subscribe(s => { this.rawList = s; },
      error => console.log(error),
      () => {
        console.log(this.rawList);
        this.convertToSongList();
        this.isLoaded = true;
        this.dataSource.filterPredicate = (data, filter) => data.title.toLowerCase().indexOf(filter) !== -1;
      });
  }

  convertToSongList() {
// tslint:disable-next-line: no-string-literal
    this.songList = this.rawList['chart'].map((item: any) => this.adapter.adapt(item));
    console.log(this.songList);
    this.dataSource = new MatTableDataSource<Song>(this.songList);
  }

  onFavorite(song: Song) {
    song.favorite = !song.favorite;
  }

  applyFilter(s: string) {
    this.dataSource.filter = s.trim().toLowerCase();
    console.log(this.dataSource);
  }
}


