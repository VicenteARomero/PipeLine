import { Component, ViewChild } from '@angular/core';
import { global } from './login/passedVar';
import { Router, NavigationEnd, ChildActivationEnd } from '@angular/router';
import { NavbarComponent } from './login/navbar/navbar.component';
import { auctions } from './login/Models/transactions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: string = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/'

  title = 'testing2';
  constructor(private passedVar:global
    ,private router :Router,
    private http: HttpClient){   
   
      
    }
   

}
