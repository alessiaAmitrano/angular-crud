import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appImgHeight]'
})
export class ImgHeightDirective implements AfterViewInit {
@Input() imgHeight: string;

constructor(private elRef: ElementRef) {}

ngAfterViewInit(): void {
this.elRef.nativeElement.style.color = this.imgHeight;
}

}
