import { Component, OnInit } from '@angular/core';
import { global } from './passedVar';

import {User} from '../login/Models/User'
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
User = {
  username : null,
  password : null
}
url :string ='http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/PlusUltraApi/validate'
  constructor(private passedVar: global,
              private http : HttpClient) { }

  ngOnInit() {
  }
  

  login(){
    console.log(this.User)
    this.http.post<User[]>( this.url, this.User, httpOptions).subscribe(
      data=>{ console.log(data),
    this.passedVar.logged= !this.passedVar.logged},

    error=> console.log(error) )
    
  }
}
