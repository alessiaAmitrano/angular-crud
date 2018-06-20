import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GamesLibraryModule } from './+games-library/games-library.module';
import { LibraryService } from './core/services/library.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GamesLibraryModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
