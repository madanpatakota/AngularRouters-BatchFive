import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SchoolService } from './school.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {

  constructor(schoolservice : SchoolService){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // i am going to fetch the value fo the login textbox and then check . then i will give permission to the school
    //detailscomponent
    console.log("As of now guard is allowing the roure");
    let email =  localStorage.getItem("email");
   // schoolservice.schoolDetails
    //this.schoolDetails = this._schoolService.schoolDetails.filter((x) => x.SchoolID == queryParam.SID)[0];
    if(email == "admin@gmail.com"){
      return true;
  }
    return false;
  }
  
}
