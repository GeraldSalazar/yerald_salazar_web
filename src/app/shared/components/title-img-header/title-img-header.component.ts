import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-img-header',
  templateUrl: './title-img-header.component.html',
  styleUrls: ['./title-img-header.component.css'],
})
export class TitleImgHeaderComponent implements OnInit {
  @Input() imageName!: string;
  @Input() screenTitle!: string;
  mobileView: boolean = false;
  constructor(private breakPointObs: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakPointObs.observe(['(max-width: 800px)']).subscribe(result => {
      if (result.matches) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    });
  }
}
