import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageTitlesComponent } from './components/page-titles/page-titles.component';
import { ContactInfoSummaryComponent } from './components/contact-info-summary/contact-info-summary.component';
import { AboutMeSummaryComponent } from './components/about-me-summary/about-me-summary.component';
import { ParallaxEffectComponent } from './components/parallax-effect/parallax-effect.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageTitlesComponent,
    ContactInfoSummaryComponent,
    AboutMeSummaryComponent,
    ParallaxEffectComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
