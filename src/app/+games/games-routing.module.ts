import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesListComponent } from './containers/games-list/games-list.component';
import { GameProfileComponent } from '+games/containers/game-profile/game-profile.component';
import { AddGameComponent } from '+games/containers/add-game/add-game.component';

const routes: Routes = [
  {
    path: '',
    component: GamesListComponent
  },
  {
    path: 'add',
    component: AddGameComponent
  },
  {
    path: ':id',
    component: GameProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
