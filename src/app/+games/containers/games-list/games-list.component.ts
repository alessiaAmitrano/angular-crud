import { Component, OnInit } from '@angular/core';
import { Game } from 'core/models/game';
import { GamesService } from 'core/services/games.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  gamesList$: Observable<Game[]>;
  constructor(
    private gameApi: GamesService,
    private router: Router) { }

  ngOnInit() {
    this.gamesList$ = this.gameApi.getGameList();
  }

  goToDetail(id: number) {
    this.router.navigate(['/games', id]);
  }
}
