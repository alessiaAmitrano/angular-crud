import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from 'core/services/games.service';
import { Game } from 'core/models/game';
import { Subscription, Observable } from 'rxjs';

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
