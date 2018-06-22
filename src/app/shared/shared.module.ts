import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageComponent,
    ButtonComponent
  ],
  exports: [ImageComponent, ButtonComponent]
})
export class SharedModule { }
