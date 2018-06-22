import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
@Input() imgUrl: string;
@Input() customHeight = '350';
@Input() customWidth = '250';
@Input() customClass: string;

  constructor() { }

  ngOnInit() {
  }

}
