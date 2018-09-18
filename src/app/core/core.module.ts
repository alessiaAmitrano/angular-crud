import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './components/content/content.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthModule } from 'core/authentication/auth.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthModule
  ],
  declarations: [
    HeaderComponent,
    ContentComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    ContentComponent
  ]
})
export class CoreModule { }
