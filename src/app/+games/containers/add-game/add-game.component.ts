import { Component, OnInit } from '@angular/core';
import { GamesService } from 'core/services/games.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game } from 'core/models/game';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  addedGames: Game[] = [];
  constructor(private gameApi: GamesService,
              private router: Router) {}

  ngOnInit() {

  }

  onGameSubmit(game: Game) {
    event.preventDefault();
    this.addedGames.push(game);
    this.gameApi.addGame(game)
    .pipe(
      tap(() => this.router.navigate(['/games']))
    ).subscribe();
    // () => this.router.navigate(['/games'])
  }
}
