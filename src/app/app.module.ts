import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppleComponent } from './Components/apple/apple.component';
import { TechCrunchComponent } from './Components/tech-crunch/tech-crunch.component';
import { LogoutComponent } from './Components/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,

    AppleComponent,
    TechCrunchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
