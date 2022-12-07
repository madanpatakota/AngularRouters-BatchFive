import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css'],
})
export class SchoolDetailsComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private _schoolService: SchoolService
  ) {}

  schoolDetails: any;
  ngOnInit(): void {
    //http://localhost:4200/schooldetails/School-1

    // i am taking subscription from the activatedroute of the parameter
    // this.activateRoute.params.subscribe((param: any) => {
    //   console.log(param); //{ID: 'School-2'}
    //   this.schoolDetails = this._schoolService.schoolDetails.filter((x) => x.SchoolID == param.ID)[0];
    //   console.log(this.schoolDetails);
    // });


    // this.activateRoute.queryParams.subscribe((queryParam: any) => {
    //   console.log(queryParam); //{ID: 'School-2'}
    //   this.schoolDetails = this._schoolService.schoolDetails.filter((x) => x.SchoolID == queryParam.SID)[0];
    //   console.log(this.schoolDetails);
    // });

    //http://localhost:4200/schooldetails#School-2
    this.activateRoute.fragment.subscribe((fragementParam: any) => {
        console.log(fragementParam); //{ID: 'School-2'}
        this.schoolDetails = this._schoolService.schoolDetails.filter((x) => x.SchoolID == fragementParam)[0];
        console.log(this.schoolDetails);
      });



  }


  
  evtUpdateUserEmail(){
    localStorage.setItem('email', 'enduser@gmail.com');
  }

  evtUpdateUserEmailtoAdmin(){
    localStorage.setItem('email', 'admin@gmail.com');
  }



}
