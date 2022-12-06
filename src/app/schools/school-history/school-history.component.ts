import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/school.service';


@Component({
  selector: 'app-school-history',
  templateUrl: './school-history.component.html',
  styleUrls: ['./school-history.component.css']
})
export class SchoolHistoryComponent implements OnInit {

  constructor(private _schoolService : SchoolService , private activateRoute:ActivatedRoute) { }

  schoolDetails: any;
  ngOnInit(): void {
    this.activateRoute.fragment.subscribe((fragementParam: any) => {
      console.log(fragementParam); //{ID: 'School-2'}
      this.schoolDetails = this._schoolService.schoolDetails.filter((x) => x.SchoolID == fragementParam)[0];
      console.log(this.schoolDetails);
    });
  }

}
