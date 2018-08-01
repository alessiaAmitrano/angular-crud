import { Component, OnInit } from '@angular/core';
import { Game } from 'core/models/game';
import { GamesService } from 'core/services/games.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '../../../../../node_modules/@ngxs/store';
import { GetAllGames } from 'core/store/games.actions';
import { GameState } from 'core/store/games.state';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  gamesList$: Observable<Game[]>;
  constructor(
    private store: Store,
    private gameApi: GamesService,
    private router: Router) { }

  ngOnInit() {
    this.gameApi.getGameList().subscribe(
      data => this.store.dispatch(new GetAllGames(data))
    );
    this.gamesList$ = this.store.select(GameState.getGames);
  }

  goToDetail(id: number) {
    this.router.navigate(['/games', id]);
  }

  goToEdit(game: Game) {
    this.router.navigate(['/games/edit', game.id]);
    this.gameApi.gameToEdit = game;
  }
}
