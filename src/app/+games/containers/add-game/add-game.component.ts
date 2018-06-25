import { Component, OnInit } from '@angular/core';
import { GamesService } from 'core/services/games.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game } from 'core/models/game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  constructor(private gameApi: GamesService) {}

  ngOnInit() {
  }

  addGame(game: Game) {
    event.preventDefault();
    this.gameApi.addGame(game).subscribe(data => console.log(data));
  }
}
