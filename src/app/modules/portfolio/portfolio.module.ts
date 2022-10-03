import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

@NgModule({
  declarations: [PortfolioComponent, ProjectDetailComponent],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
