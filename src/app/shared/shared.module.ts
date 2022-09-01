import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderPresentationImgComponent } from './components/header-presentation-img/header-presentation-img.component';
import { BgCircleDecorationComponent } from './components/bg-circle-decoration/bg-circle-decoration.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HeaderPresentationImgComponent,
    BgCircleDecorationComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavBarComponent,
    HeaderPresentationImgComponent,
    BgCircleDecorationComponent,
  ],
})
export class SharedModule {}
