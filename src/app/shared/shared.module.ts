import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { ButtonComponent } from './components/button/button.component';
import { ImgHeightDirective } from './directives/img-height.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageComponent,
    ButtonComponent,
    ImgHeightDirective
  ],
  exports: [ImageComponent, ButtonComponent]
})
export class SharedModule { }
