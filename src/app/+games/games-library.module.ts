import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesLandingComponent } from './containers/games-landing/games-landing.component';
import { GamesLibraryRoutingModule } from './games-library-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GamesLibraryRoutingModule
  ],
  declarations: [GamesLandingComponent],
  exports: [GamesLandingComponent]
})
export class GamesLibraryModule { }
