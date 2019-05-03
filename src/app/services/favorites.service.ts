import { Song } from './../song.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  baseURL = window.location.origin + '/api';

  constructor(private http: HttpClient) { }

  getAllFavorites(): Observable<Song[]> {
    return this.http.get<Song[]>('http://localhost:80/api/getallfavorites');
  }

  addToFavorites(song: Song) {
    return this.http.post<Song>('http://localhost:80/api/addtofavorites', song);
  }
}
