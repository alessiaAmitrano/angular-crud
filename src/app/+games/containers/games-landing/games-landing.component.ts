import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from 'core/services/games.service';
import { Game } from 'core/models/game';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-games-landing',
  templateUrl: './games-landing.component.html',
  styleUrls: ['./games-landing.component.scss']
})
export class GamesLandingComponent implements OnInit {
  gamesList$: Observable<Game[]>;
  constructor(private gameApi: GamesService) { }

  ngOnInit() {
      this.gamesList$ = this.gameApi.getGameList();
  }
}
