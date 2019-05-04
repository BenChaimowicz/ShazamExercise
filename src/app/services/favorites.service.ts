import { Song } from './../song.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  baseURL = window.location.origin + '/api';

  constructor(private http: HttpClient) { }

  getAllFavorites(): Observable<Song[]> {
    return this.http.get<Song[]>(this.baseURL + '/getAllFavorites').pipe(
      catchError(this.handleError));
  }

  addToFavorites(song: Song) {
    return this.http.post<Song>(this.baseURL + '/addtofavorites', song).pipe(
      catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = 'Error ' + error.error.message;
    } else {
      errorMsg = 'Error ' + error.status + ' / ' + error.message;
    }
    return throwError(errorMsg);
  }
}

