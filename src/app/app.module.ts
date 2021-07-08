import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { DigitalcvComponent } from './views/digitalcv/digitalcv.component';
import { ContactComponent } from './views/contact/contact.component';
import { HeroComponent } from './components/homepage/hero/hero.component';
import { ParallaxModule } from 'ngx-parallax';
import { MainsectionComponent } from './components/homepage/mainsection/mainsection.component';
import { TechcarouselComponent } from './components/homepage/techcarousel/techcarousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    DigitalcvComponent,
    ContactComponent,
    HeroComponent,
    MainsectionComponent,
    TechcarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParallaxModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
