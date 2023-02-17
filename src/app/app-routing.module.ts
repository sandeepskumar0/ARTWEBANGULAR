import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformComponent } from './pages/artform/artform.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'signin',component:SigninComponent
  },
  {
    path:'artform',component:ArtformComponent
  },
  {
    path:'single-page',component:SinglePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
