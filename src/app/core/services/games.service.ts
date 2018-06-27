import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Game } from 'core/models/game';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
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
    return this.httpC.get<Game>(`${this.gamesURL}/${id}`)
      .pipe(
        catchError(error => throwError(error))
      );
  }

  // CREATE
  addGame(game: Game) {
    return this.httpC.post<Game>(this.gamesURL, game, httpOptions)
      .pipe(
        catchError(error => throwError(error))
      );
  }
  // UPDATE
  editGame(game: Game): any {
    return this.httpC.put(`${this.gamesURL}/${game.id}`, game)
      .pipe(
        catchError(error => throwError(error))
      );
  }

  // DELETE
  deleteGame(game: Game): any {
    return this.httpC.delete(`${this.gamesURL}/${game.id}`)
      .pipe(
        map(success => console.log(success)),
        catchError(error => throwError(error))
      );
  }

  logError(game: Game) {
    console.log(game);
  }
}
