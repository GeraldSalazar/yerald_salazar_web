import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeModule } from './modules/about-me/about-me.module';
import { ContactModule } from './modules/contact/contact.module';
import { HomeModule } from './modules/home/home.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PortfolioModule,
    ContactModule,
    AboutMeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
