import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interface/item';
import {  HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from 'src/app/login/Models/User';
import { Router } from '@angular/router';
import { global } from 'src/app/login/passedVar';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'Application/json',
    
  })
}
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  //This will hold the user's wishlist
  private list: Item []
 
  //the user
  ///Need to fix
  memeber: User
  //the endpoint
  endpoint="http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/list"

  constructor(private http: HttpClient, private route: Router, private curuser: global) {
    this.memeber = curuser.loggeduser;
    console.log(this.memeber.items.length)
    
  }

  ngOnInit() {
    console.log(this.memeber)
    /*this.http.post<User>( this.endpoint,this.memeber,httpOptions).subscribe(
      data=>{
        this.memeber = data;
        this.list = data.items;
        console.log(this.memeber)
      })*/
  }

  loadItem(wish: Item){
    if(wish != null || wish != undefined){
      this.route.navigate(['itempage', wish]);
    }
  }

}