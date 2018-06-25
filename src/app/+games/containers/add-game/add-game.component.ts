import { Component, OnInit } from '@angular/core';
import { GamesService } from 'core/services/games.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game } from 'core/models/game';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  constructor(private gameApi: GamesService,
              private router: Router) {}

  ngOnInit() {
  }

  addGame(game: Game) {
    event.preventDefault();
    this.gameApi.addGame(game).subscribe(() => this.router.navigate(['/games']));
  }
}
