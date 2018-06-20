import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library/library.component';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  declarations: [LibraryComponent],
  exports: [LibraryComponent]
})
export class LibraryModule { }
