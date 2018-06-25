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
  // CRUD

  // READ
  getGameList(): Observable<Game[]> {
    return this.httpC.get<Game[]>(this.gamesURL);
  }
  // READ
  getGameById(id: number | string): Observable<Game> {
    return this.httpC.get<Game>(`${this.gamesURL}/${id}`);
  }

  // CREATE
  // addGame(game: Game): Observable<Game> {
  //   return this.httpC.post<Game>();
  // }
  // UPDATE


  // DELETE
}
