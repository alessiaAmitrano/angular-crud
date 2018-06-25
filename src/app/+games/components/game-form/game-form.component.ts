import { Component, OnInit } from '@angular/core';
import { GamesService } from 'core/services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  gameToAdd = {
    id: 100,
    name: 'ziggidi',
    year: '1921',
    image: 'boh'
  };
  gameswhat: any;
  constructor(private gameApi: GamesService) { }

  ngOnInit() {
  }

  addGame() {
    this.gameswhat = this.gameApi.addGame(this.gameToAdd);
  }

}
