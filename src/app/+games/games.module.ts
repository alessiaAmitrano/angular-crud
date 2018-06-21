import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './containers/games-list/games-list.component';
import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  declarations: [GamesListComponent]
})
export class GamesModule { }
