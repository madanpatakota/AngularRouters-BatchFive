import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor(private _serviceServce:SchoolService , private router : Router , private activateRoute : ActivatedRoute) { }

  schoolList:any = [];
  ngOnInit(): void {
      this.schoolList = this._serviceServce.schoolsList;


      this.activateRoute.data.subscribe((response)=>{
        console.log("******************",response);
      })


  }


  //localhost:4200/schooldetails

  evtNavigation(id:any){
     //this.router.navigate(['/schooldetails',id]);
     //this.router.navigate(['/schooldetails'] , { queryParams : {SID : id}});
     this.router.navigate(['/schooldetails'] , { fragment : id});
  }


  //localhost:4200/schools/schoolhistory
  evtHistoryNavigation(id:any){
    this.router.navigate(['schools/schoolhistory'],  { fragment : id});
  }

  



}
