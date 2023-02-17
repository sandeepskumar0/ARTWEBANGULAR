import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArtformComponent } from './pages/artform/artform.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactComponent,
    ArtformComponent,
    SignupComponent,
    SigninComponent,
    NavbarComponent,
    FooterComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
