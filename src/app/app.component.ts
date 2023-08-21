import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from './school.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'AngularRouters-BatchFive';

  constructor(private router: Router, private schoolservice: SchoolService) {}

  isMainPage = false;

  ngAfterViewInit() {
    console.log("triggered");
    this.schoolservice.subject.subscribe((value) => {
      if (value) {
        this.isMainPage = true;
        this.router.navigate(['main']);
      }
    });
  }
}
