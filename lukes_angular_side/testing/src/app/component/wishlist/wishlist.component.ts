import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interface/item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  //This will hold the user's wishlist
  private list: any []

  //the endpoint
  endpoint="http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/list"

  constructor(private http: HttpClient) {
    this.http.get<[]>( this.endpoint).subscribe(
      data=>{})
   }

  ngOnInit() {}

  loadItem(wish: Item){
    
  }

}
