import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auctions } from '../login/Models/transactions';

@Injectable({
  providedIn: 'root'
})
export class LoadlistService {
  url: string = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/'

  constructor(private http: HttpClient) { }
  getlist(){
      return this.http.get(this.url+"ping",)
          
        }
    }


