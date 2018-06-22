import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './containers/games-list/games-list.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameProfileComponent } from './containers/game-profile/game-profile.component';
import { GameItemCardComponent } from './components/game-item-card/game-item-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ],
  declarations: [GamesListComponent, GameProfileComponent, GameItemCardComponent]
})
export class GamesModule { }
