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
    this.activateRoute.params.subscribe((param: any) => {
      console.log(param); //{ID: 'School-2'}

      // let a = [];
      // a.fil

      this.schoolDetails = this._schoolService.schoolDetails.filter((x) => x.SchoolID == param.ID)[0];
      console.log(this.schoolDetails);
    });
  }
}
