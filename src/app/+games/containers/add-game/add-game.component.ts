import { Component, OnInit } from '@angular/core';
import { GamesService } from 'core/services/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  gameToAdd = {
    id: 180,
    name: 'ziggidi',
    year: '1921',
    image: 'boh'
  };
  constructor(private gameApi: GamesService) { }

  ngOnInit() {
  }

  addGame(game) {
    event.preventDefault();
    this.gameApi.addGame(game).subscribe(data => console.log(data));
  }
}
