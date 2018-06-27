import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Game } from 'core/models/game';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GamesService } from 'core/services/games.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-profile',
  templateUrl: './game-profile.component.html',
  styleUrls: ['./game-profile.component.scss']
})
export class GameProfileComponent implements OnInit {
  gameProfile$: Observable<Game>;
  listBtnClass = 'background-color : "red"';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private gameApi: GamesService) { }

  ngOnInit() {
    this.gameProfile$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.gameApi.getGameById(params.get('id')))
      );
  }

  goToList() {
    this.router.navigate(['/games']);
  }

  goBack() {
    this.location.back();
  }

  goToEdit(game: Game) {
    this.router.navigate(['/games/edit', game.id]);
    this.gameApi.gameToEdit = game;
  }

  deleteGameWithId(game: Game) {
    this.gameApi.deleteGame(game);
    this.router.navigate(['/games']);
  }
}
