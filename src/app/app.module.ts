import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';
import { StorageService } from './storage.service';
import { ContactComponent } from './contact/contact.component';
@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
      DashboardComponent,
      HomeComponent,
      ContactComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatSliderModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      RequestService,
      StorageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
