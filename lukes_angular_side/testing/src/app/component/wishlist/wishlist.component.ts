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
  

  constructor(private route: Router, private curuser: global) {
    this.memeber = curuser.loggeduser;
    this.list = this.memeber.items
  }

  ngOnInit() {


  }

  loadItem(wish: Item){
    if(wish != null || wish != undefined){
      this.route.navigate(['itempage', wish]);
    }
  }

}
