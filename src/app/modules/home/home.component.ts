import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  headerPresentationImage: string = 'home-header-img.jpg';
  mobileView: boolean = false;
  constructor(private breakPointObs: BreakpointObserver) {}
  ngOnInit(): void {
    this.checkScreenBreakP();
  }

  checkScreenBreakP() {
    this.breakPointObs.observe(['(max-width: 800px)']).subscribe(result => {
      console.log(result);
      if (result.matches) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    });
  }
}
