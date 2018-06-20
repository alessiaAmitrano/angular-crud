import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesLibraryLandingComponent } from './containers/games-library-landing/games-library-landing.component';
import { GamesLibraryRoutingModule } from './games-library-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GamesLibraryRoutingModule
  ],
  declarations: [GamesLibraryLandingComponent],
  exports: [GamesLibraryLandingComponent]
})
export class GamesLibraryModule { }
