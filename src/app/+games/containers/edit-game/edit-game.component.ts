import { Component, OnInit } from '@angular/core';
import { Game } from 'core/models/game';
import { GamesService } from 'core/services/games.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {

  constructor(private gameApi: GamesService,
              private router: Router) { }

  ngOnInit() {
  }
  onGameEditSubmit(game: Game) {
    event.preventDefault();
    this.gameApi.editGame(game)
      .pipe(
        tap(() => this.router.navigate(['/games']))
      ).subscribe();
  }
}
