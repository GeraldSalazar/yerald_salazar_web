import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about-me/about-me.module').then(
        mod => mod.AboutMeModule
      ),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./modules/portfolio/portfolio.module').then(
        mod => mod.PortfolioModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then(mod => mod.ContactModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
