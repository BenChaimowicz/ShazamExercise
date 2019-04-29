import { Song, SongAdapter } from './song.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// tslint:disable-next-line: max-line-length
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2aXZAY3ljdXJpdHkuY29tIiwibmFtZSI6ImF2aXYiLCJpYXQiOjE1NTQ4ODIyOTl9._cLVE40a47NXHENdLCd8L4AGaORzJs8vkIMFIt4WyWU';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = 'https://fullstack-test-server.herokuapp.com/api/songs';

  constructor(private http: HttpClient, private adapter: SongAdapter) {
  }

  getList(): Observable<Song[]> {
    return this.http.get<Song[]>(this.baseURL, { headers: { Authorization: token } });
  }
}
