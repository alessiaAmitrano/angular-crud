import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from 'core/services/games.service';
import { Game } from 'core/models/game';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-games-landing',
  templateUrl: './games-landing.component.html',
  styleUrls: ['./games-landing.component.scss']
})
export class GamesLandingComponent implements OnInit, OnDestroy {
  gamesList: Game[];
  sub: Subscription;
  gamesList$: Observable<Game[]>;
  constructor(private gameApi: GamesService) { }

  ngOnInit() {
    this.sub = this.gameApi.getGameList()
      .subscribe(data => this.gamesList = data);

      this.gamesList$ = this.gameApi.getGameList();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
