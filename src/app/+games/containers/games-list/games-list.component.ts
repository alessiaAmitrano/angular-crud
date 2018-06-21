import { Component, OnInit } from '@angular/core';
import { Game } from 'core/models/game';
import { GamesService } from 'core/services/games.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  gamesList$: Observable<Game[]>;
  constructor(private gameApi: GamesService) { }

  ngOnInit() {
    this.gamesList$ = this.gameApi.getGameList();
  }
}
