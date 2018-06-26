import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'core/models/game';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  gamesURL = 'http://localhost:3000/games';
  gameToEdit: Game;
  constructor(private httpC: HttpClient) { }
  // ---CRUD--- //

  // READ
  getGameList(): Observable<Game[]> {
    return this.httpC.get<Game[]>(this.gamesURL);
  }

  // READ
  getGameById(id: number | string): Observable<Game> {
    return this.httpC.get<Game>(`${this.gamesURL}/${id}`);
  }

  // CREATE
  addGame(game: Game) {
   return this.httpC.post<Game>(this.gamesURL, game, httpOptions);
}
  // UPDATE
  editGame(game: Game): any {
    return this.httpC.put(`${this.gamesURL}/${game.id}`, game);
  }

  // DELETE

  logError(game: Game) {
    console.log(game);
  }
}
