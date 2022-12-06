import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('email')  _email : ElementRef<any>;
  @ViewChild('password') _password : ElementRef<any>;

  evtClick(){

    // this._email.nativeElement.value
    // this._password.nativeElement.value;

    localStorage.setItem('email',this._email.nativeElement.value);
    localStorage.setItem('password', this._password.nativeElement.value);

    


  }

}
