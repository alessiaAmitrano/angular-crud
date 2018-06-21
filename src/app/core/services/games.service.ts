import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'core/models/game';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  gamesURL = 'http://localhost:3000/games';
  constructor(private httpC: HttpClient) { }

  getGameList(): Observable<Game[]> {
    return this.httpC.get<Game[]>(this.gamesURL);
  }

  getGameById(id: number | string): Observable<Game> {
    return this.httpC.get<Game>(`${this.gamesURL}/${id}`);
  }
}
