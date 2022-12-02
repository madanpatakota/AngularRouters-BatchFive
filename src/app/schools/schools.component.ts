import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor(private _serviceServce:SchoolService) { }

  schoolList:any = [];
  ngOnInit(): void {
      this.schoolList = this._serviceServce.schoolsList;
  }

}
