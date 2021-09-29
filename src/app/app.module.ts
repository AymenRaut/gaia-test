import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './banner/banner.component';
import { InfoComponent } from './info/info.component';
import { AboutToetComponent } from './about-toet/about-toet.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { CauselistTendersComponent } from './causelist-tenders/causelist-tenders.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomePageComponent,
    BannerComponent,
    InfoComponent,
    AboutToetComponent,
    WhatsNewComponent,
    SecondPageComponent,
    MilestonesComponent,
    CauselistTendersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
