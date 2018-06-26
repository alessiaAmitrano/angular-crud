import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './containers/games-list/games-list.component';
import { GamesRoutingModule } from './games-routing.module';
import { GameProfileComponent } from './containers/game-profile/game-profile.component';
import { GameItemCardComponent } from './components/game-item-card/game-item-card.component';
import { SharedModule } from '../shared/shared.module';
import { AddGameComponent } from './containers/add-game/add-game.component';
import { GameFormComponent } from '+games/components/game-form/game-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditGameComponent } from './containers/edit-game/edit-game.component';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [GamesListComponent, GameProfileComponent, GameItemCardComponent, AddGameComponent, GameFormComponent, EditGameComponent]
})
export class GamesModule { }
