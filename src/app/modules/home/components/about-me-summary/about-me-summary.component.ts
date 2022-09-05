import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-summary',
  templateUrl: './about-me-summary.component.html',
  styleUrls: ['./about-me-summary.component.css'],
})
export class AboutMeSummaryComponent implements OnInit {
  desktopView: boolean = false;
  constructor(private breakPointObs: BreakpointObserver) {}

  ngOnInit(): void {
    this.checkDesktopView();
  }

  checkDesktopView() {
    this.breakPointObs
      .observe(['(min-width: 800px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.desktopView = true;
          return;
        }
        this.desktopView = false;
      });
  }
}
