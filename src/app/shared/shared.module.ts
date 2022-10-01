import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderPresentationImgComponent } from './components/header-presentation-img/header-presentation-img.component';
import { BgCircleDecorationComponent } from './components/bg-circle-decoration/bg-circle-decoration.component';
import { PortfolioPreviewComponent } from './components/portfolio-preview/portfolio-preview.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TitleImgHeaderComponent } from './components/title-img-header/title-img-header.component';

@NgModule({
  declarations: [
    NavBarComponent,
    HeaderPresentationImgComponent,
    BgCircleDecorationComponent,
    PortfolioPreviewComponent,
    FooterComponent,
    TitleImgHeaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavBarComponent,
    HeaderPresentationImgComponent,
    BgCircleDecorationComponent,
    PortfolioPreviewComponent,
    FooterComponent,
    RouterModule,
    TitleImgHeaderComponent,
  ],
})
export class SharedModule {}
