import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './containers/games-list/games-list.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameProfileComponent } from './containers/game-profile/game-profile.component';
import { GameItemCardComponent } from './components/game-item-card/game-item-card.component';
import { SharedModule } from '../shared/shared.module';
import { AddGameComponent } from './containers/add-game/add-game.component';
import { GameFormComponent } from '+games/components/game-form/game-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [GamesListComponent, GameProfileComponent, GameItemCardComponent, AddGameComponent, GameFormComponent]
})
export class GamesModule { }
