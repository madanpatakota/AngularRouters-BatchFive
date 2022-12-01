import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';

import { Routes, RouterModule } from '@angular/router';

// http://localhost:4200/Main   ---> Maincomponent
// http://localhost:4200/Schools   ---> Schoolscomponent
// http://localhost:4200/SchoolDetails   ---> SchoolDetailscomponent

// real time project
// https://github.com/explore   -- Explore page
// https://github.com/issues    -- issue page
// https://github.com/codespaces  -- codespaces

// Main   MainComponent
// Schools SchoolsComponent

const AppRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: 'schooldetails', component: SchoolDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SchoolsComponent,
    SchoolDetailsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
