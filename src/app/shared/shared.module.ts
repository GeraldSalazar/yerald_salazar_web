import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderPresentationImgComponent } from './components/header-presentation-img/header-presentation-img.component';
import { BgCircleDecorationComponent } from './components/bg-circle-decoration/bg-circle-decoration.component';
import { PortfolioPreviewComponent } from './components/portfolio-preview/portfolio-preview.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HeaderPresentationImgComponent,
    BgCircleDecorationComponent,
    PortfolioPreviewComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavBarComponent,
    HeaderPresentationImgComponent,
    BgCircleDecorationComponent,
    PortfolioPreviewComponent,
  ],
})
export class SharedModule {}
