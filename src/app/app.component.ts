import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRouters-BatchFive';

  constructor(private activateRoute:ActivatedRoute){

  }

  isMainPage = false;
  ngOnint(){
    console.log("present url " , this.activateRoute.url);
  }
}
