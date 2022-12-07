import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log("As of now guard is allowing the roure");
      let email =  localStorage.getItem("email");
     
      if(email == "admin@gmail.com"){
        return true;
      }
      else{
        alert("I am having some doubts. please stay some time....");
        return false;
      }
 
    return true;
  }
  
}
