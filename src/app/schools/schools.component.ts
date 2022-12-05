import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor(private _serviceServce:SchoolService , private router : Router) { }

  schoolList:any = [];
  ngOnInit(): void {
      this.schoolList = this._serviceServce.schoolsList;
  }

  evtNavigation(id:any){
     //this.router.navigate(['/schooldetails',id]);
     //this.router.navigate(['/schooldetails'] , { queryParams : {SID : id}});
     this.router.navigate(['/schooldetails'] , { fragment : id});
  }

}
