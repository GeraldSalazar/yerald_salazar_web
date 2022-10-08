import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CvDownloadComponent } from './components/cv-download/cv-download.component';
import { SkillsConceptsComponent } from './components/skills-concepts/skills-concepts.component';

@NgModule({
  declarations: [AboutMeComponent, CvDownloadComponent, SkillsConceptsComponent],
  imports: [CommonModule, AboutMeRoutingModule, SharedModule],
})
export class AboutMeModule {}
