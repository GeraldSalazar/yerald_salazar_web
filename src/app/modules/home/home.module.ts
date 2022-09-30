import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageTitlesComponent } from './components/page-titles/page-titles.component';
import { ContactInfoSummaryComponent } from './components/contact-info-summary/contact-info-summary.component';
import { AboutMeSummaryComponent } from './components/about-me-summary/about-me-summary.component';
import { ParallaxEffectComponent } from './components/parallax-effect/parallax-effect.component';
import { SkillsTableComponent } from './components/skills-table/skills-table.component';
import { SkillLevelPipe } from './pipes/skills-table/skill-level.pipe';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    PageTitlesComponent,
    ContactInfoSummaryComponent,
    AboutMeSummaryComponent,
    ParallaxEffectComponent,
    SkillsTableComponent,
    SkillLevelPipe,
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
