import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router , private schoolService : SchoolService) { }

  ngOnInit(): void {
  }

  @ViewChild('email')  _email : ElementRef<any>;
  @ViewChild('password') _password : ElementRef<any>;

  evtClick(){

    // this._email.nativeElement.value
    // this._password.nativeElement.value;

    localStorage.setItem('email',this._email.nativeElement.value);
    localStorage.setItem('password', this._password.nativeElement.value);

    //this.schoolService.subject.next(true);
    this.router.navigate(['main']);


  }

}
