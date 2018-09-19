import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { provideForRootGuard } from '../../node_modules/@angular/router/src/router_module';

import { NgxsModule } from '@ngxs/store';
import { GameState } from './core/store/games.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from 'core/authentication/services/authentication.service';
import { BackendInterceptor } from 'core/authentication/services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgxsModule.forRoot([
      GameState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService, BackendInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
