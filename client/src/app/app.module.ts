import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkoutsService } from './workouts.service';
import { AuthenticationService } from './authentication/authentication.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { RegisterComponent } from './register/register/register.component';
import { ExercisesComponent } from './Exercises/exercises.component';
import { ProgramsComponent } from './programs/programs.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    ExercisesComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: 'exercises', component: ExercisesComponent },
      { path: 'programs', component: ProgramsComponent },


  ]),
  HttpModule,
  FormsModule
  ],
  providers: [
    WorkoutsService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
