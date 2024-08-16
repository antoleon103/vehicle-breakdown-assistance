import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { MechanicRequestComponent } from './mechanic-request/mechanic-request.component';
import { MechanicheaderComponent } from './mechanicheader/mechanicheader.component';
import { MapComponent } from './map/map.component';
import { LocComponent } from './loc/loc.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'new-request', component: NewRequestComponent},
  { path: 'view-request', component: ViewRequestComponent},
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'mechanic', component: MechanicComponent},
  { path: 'mechanic-request', component: MechanicRequestComponent},
  { path: 'mechanicheader', component: MechanicheaderComponent},
  { path: 'map', component: MapComponent},
  { path: 'map/:userId', component: MapComponent },
  { path: 'loc', component: LocComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

