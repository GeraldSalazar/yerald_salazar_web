import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CurrentTabService } from './current-tab.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, AfterViewInit {
  shiftMenu: boolean = false; //To show the mobile menu and hide nav
  showMobileMenu: boolean = false; //To show the nav menu when mobile view
  listenFunc: any;
  @ViewChildren('navItem')
  navItems!: QueryList<ElementRef<HTMLAnchorElement>>;
  constructor(
    private breakPointsObs: BreakpointObserver,
    private renderer: Renderer2,
    private currentTab: CurrentTabService,
    private router: Router
  ) {}
  ngOnInit() {
    this.checkMenuBreakPoint();
  }
  ngAfterViewInit(): void {
    const index = this.currentTab.getCurrentTab();
    this.renderer.addClass(this.navItems.get(index)?.nativeElement, 'active');

    this.navItems.forEach((item, index) => {
      this.listenFunc = this.renderer.listen(
        item.nativeElement,
        'click',
        event => {
          event.preventDefault();
          let target = event.target || event.srcElement || event.currentTarget;
          if (target) {
            this.currentTab.setCurrentTab(index);
            this.router.navigate([target.dataset.route]);
          }
        }
      );
    });
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
