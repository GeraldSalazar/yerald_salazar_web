import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private breakPointsObs: BreakpointObserver) {}
  shiftMenu: boolean = false; //To show the mobile menu and hide nav
  showMobileMenu: boolean = false; //To show the nav menu when mobile view

  ngOnInit() {
    this.checkMenuBreakPoint();
  }

  toggleBarsMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  checkMenuBreakPoint() {
    this.breakPointsObs.observe(['(max-width: 800px)']).subscribe(result => {
      this.showMobileMenu = false;
      if (result.matches) {
        this.shiftMenu = true;
      } else {
        this.shiftMenu = false;
      }
    });
  }
}
