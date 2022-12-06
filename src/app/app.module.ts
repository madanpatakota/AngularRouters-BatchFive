import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';

import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SchoolHistoryComponent } from './schools/school-history/school-history.component';
import { CanActiveGuard } from './can-active.guard';
import { LoginComponent } from './login/login.component';

// http://localhost:4200/Main   ---> Maincomponent
// http://localhost:4200/Schools   ---> Schoolscomponent
// http://localhost:4200/SchoolDetails   ---> SchoolDetailscomponent

// real time project
// https://github.com/explore   -- Explore page
// https://github.com/issues    -- issue page
// https://github.com/codespaces  -- codespaces

// Main   MainComponent
// Schools SchoolsComponent
//http://localhost:4200/schooldetails


//http://localhost:4200/schooldetails/School-1       // param
//http://localhost:4200/schooldetails?ID=School-1    //queryparam


//https://github.com/madanpatakota?tab=repositories


//https://github.com/madanpatakota#repositories

//http://localhost:4200/schools/schoolhistory
const AppRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'schools', component: SchoolsComponent ,
     children  : [  { path: 'schoolhistory', component: SchoolHistoryComponent } ] },
  // { path: 'schooldetails/:ID', component: SchoolDetailsComponent },
  { path: 'schooldetails', component: SchoolDetailsComponent , canActivate: [ CanActiveGuard ] },
  //{ path : 'schooldetails123' , component : NotFoundComponent}
  { path : 'not-found' , component : NotFoundComponent},
  { path:'**' , redirectTo:'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SchoolsComponent,
    SchoolDetailsComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
