import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from './school.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRouters-BatchFive';

  constructor(private activateRoute:ActivatedRoute , private schoolservice : SchoolService){

  }

  isMainPage = false;

  ngOnint(){
    // let emailValue = localStorage.getItem("email");   /// xyz@gamil.com

    // console.log(emailValue);

    // if(emailValue){
    //    this.isMainPage = true;
    // }
    // else{
    //   this.isMainPage = false;
    // }

    this.schoolservice.subject.subscribe((value)=>{
        if(value){
          this.isMainPage = true;
        }
    })

    

  }
}
