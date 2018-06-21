import { Component, OnInit } from '@angular/core';
import { GamesService } from 'core/services/games.service';

@Component({
  selector: 'app-games-landing',
  templateUrl: './games-landing.component.html',
  styleUrls: ['./games-landing.component.scss']
})
export class GamesLandingComponent implements OnInit {

  constructor(private gameApi: GamesService) { }

  ngOnInit() {
    this.gameApi.getGameList()
      .subscribe(console.log);
  }

}
