import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private schoolService:SchoolService) { }

  ngOnInit(): void {
     this.schoolService.subject.next(true);
  }

}
