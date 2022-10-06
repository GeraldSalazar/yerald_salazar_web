import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-presentation-img',
  templateUrl: './header-presentation-img.component.html',
  styleUrls: ['./header-presentation-img.component.css'],
})
export class HeaderPresentationImgComponent {
  @Input() imgName = '';
  @Input() imgWidth = '';
  @Input() imgHeight = '';
  constructor() {}
}
