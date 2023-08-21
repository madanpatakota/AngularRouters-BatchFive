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
import { CandeactivateGuard } from './candeactivate.guard';
import { SchoolResolver } from './school.resolver';
 
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
  { path: 'login', component: LoginComponent },
  { path: 'main', component:  MainComponent },
  {
    path: 'schools',
    component: SchoolsComponent,
    resolve: [SchoolResolver],
    children: [
      {
        path: 'schoolhistory',
        component: SchoolHistoryComponent,
        canActivateChild: [],
      },
    ],
  },
  // { path: 'schooldetails/:ID', component: SchoolDetailsComponent },
  {
    path: 'schooldetails',
    component: SchoolDetailsComponent,
    canActivate: [CanActiveGuard],
    canDeactivate: [CandeactivateGuard],
  },
  //{ path : 'schooldetails123' , component : NotFoundComponent}
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: [{ messageName: '401 Not found page' }],
  },
  { path: '', redirectTo: 'login' , pathMatch:'full' },
  { path: '**', redirectTo: 'not-found' },
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
