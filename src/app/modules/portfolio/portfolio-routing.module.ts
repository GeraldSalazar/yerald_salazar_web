import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    title: 'Yerald Salazar - Portfolio',
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent,
    title: 'Yerald Salazar - Project',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
