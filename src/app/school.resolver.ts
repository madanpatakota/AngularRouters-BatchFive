import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SchoolService } from './school.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolResolver implements Resolve<any> {


  constructor(private schoolService : SchoolService){

  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    let output = [];
    output.push("Hello world");
    output.push("dummy valus"); 
    output.push(this.schoolService.schoolDetails);
    return output;
  }
}
