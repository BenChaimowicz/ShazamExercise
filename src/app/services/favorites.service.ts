import { Song } from './../song.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  baseURL = window.location.origin + '/api';

  constructor(private http: HttpClient) { }

  getAllFavorites(): Observable<Song[]> {
    return this.http.get<Song[]>(this.baseURL + '/getAllFavorites');
  }

  addToFavorites(song: Song) {
    return this.http.post(this.baseURL + '/addToFavorites', song);
  }
}