import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interface/item';
import {  HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from 'src/app/login/Models/User';
import { Router } from '@angular/router';
import { global } from 'src/app/login/passedVar';

//TODO Add the min price to wishlist
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
   list: Item []
   
  //the user
  ///Need to fix
  memeber: User
  url: string = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/'


  constructor(private route: Router, private curuser: global,private http: HttpClient) {
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
  df(member_id:number){
    var send = { 
    serialNumber : 0,
    name :null,
    id:member_id}
    console.log(send)
    
      this.http.post<any>(this.url+"removeFavorite", send, httpOptions).subscribe(
        data => {
          
          console.log(data)

          
        }, error => {
          console.log(error)
          
          
        })

    }
refreshh(){
  this.curuser.loggeduser.id
  var send ={
    
  }
  this.http.post<Item[]>(this.url+"list", send, httpOptions).subscribe(
    data => {
      console.log(data)
      
    }, error => {
      console.log(error)
      
      
    })
}
}
