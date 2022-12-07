import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { }

  //http://localhost:4200/not-found

  message : any;
  ngOnInit(): void {
    this.activateRoute.data.subscribe((response)=>{
        //  console.log(response);
        this.message = response[0].messageName;
    })
  }

}
