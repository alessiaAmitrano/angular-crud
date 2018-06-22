import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appImgHeight]'
})
export class ImgHeightDirective implements AfterViewInit {
@Input() imgHeight?: string;
@Input() imgWidth?: string;

constructor(private elRef: ElementRef) {}

ngAfterViewInit(): void {
  if (this.imgHeight) {
this.elRef.nativeElement.style.height = this.imgHeight;
}
if (this.imgWidth) {
  this.elRef.nativeElement.style.width = this.imgWidth;
}
}

}
