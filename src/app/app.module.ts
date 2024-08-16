import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component'; 
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { MechanicRequestComponent } from './mechanic-request/mechanic-request.component';
import { MechanicheaderComponent } from './mechanicheader/mechanicheader.component';
import { MapComponent } from './map/map.component';
import { LocComponent } from './loc/loc.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    NewRequestComponent,
    ViewRequestComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    FeedbackComponent,
    MechanicComponent,
    MechanicRequestComponent,
    MechanicheaderComponent,
    MapComponent,
    LocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    ToastrModule.forRoot(),
    CommonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
