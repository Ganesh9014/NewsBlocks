import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { TechCrunchComponent } from './Components/tech-crunch/tech-crunch.component';
import { AppleComponent } from './Components/apple/apple.component';

const routes: Routes = [
  { path: 'nav', component: NavBarComponent },
  { path: 'TechCrunch', component: TechCrunchComponent },
  { path: 'Apple', component: AppleComponent },
  { path: 'Tesla', component: AppleComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
