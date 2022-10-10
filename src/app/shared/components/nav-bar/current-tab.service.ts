import { Injectable } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';

@Injectable({ providedIn: 'root' })
export class CurrentTabService {
  currentTabIndex: number = 0;
  constructor() {}
  setCurrentTab(newActiveTabIndex: number) {
    this.currentTabIndex = newActiveTabIndex;
  }
  getCurrentTab(): number {
    return this.currentTabIndex;
  }
}
