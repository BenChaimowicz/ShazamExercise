import { FavoritesService } from './../services/favorites.service';
import { map } from 'rxjs/operators';
import { Song, SongAdapter } from './../song.model';
import { DataService } from '../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';

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
  favoriteList: Song[];

  @ViewChild(MatTable) table: MatTable<Song>;

  constructor(private http: DataService, private favoritesService: FavoritesService, private adapter: SongAdapter) {
    this.getRawList();
  }

  ngOnInit() {
  }

  getRawList() {
    this.http.getList().subscribe(s => { this.rawList = s; },
      error => console.log(error),
      () => {
        this.convertToSongList();
        this.dataSource.filterPredicate = (data, filter) => data.title.toLowerCase().indexOf(filter) !== -1;
        this.isLoaded = true;
        this.getFavoriteList();
      });
  }

  convertToSongList() {
// tslint:disable-next-line: no-string-literal
    this.songList = this.rawList['chart'].map((item: any) => this.adapter.adapt(item));
    this.dataSource = new MatTableDataSource<Song>(this.songList);
  }

  refreshList() {
    this.dataSource = new MatTableDataSource<Song>(this.songList);
    this.table.renderRows();
    console.log(this.songList);
  }

  applyFilter(s: string) {
    this.dataSource.filter = s.trim().toLowerCase();
  }

  onFavorite(song: Song) {
    this.favoritesService.addToFavorites(song).subscribe(() => {
      song.favorite = !song.favorite;
      this.refreshList();
    });
  }

  getFavoriteList() {
    this.favoritesService.getAllFavorites().subscribe(song => {
      this.favoriteList = song;
    }, err => { console.log(err); }, () => this.updateFavoritesFromServer());
  }

  updateFavoritesFromServer() {

    if (this.favoriteList.length > 0) {
      this.favoriteList.forEach(fav => {
        console.log(fav);
        this.songList.forEach(song => {
          if (song.index === fav.index) {
            song.favorite = true;
          }
        });
      });
    }
    this.refreshList();
  }
}


