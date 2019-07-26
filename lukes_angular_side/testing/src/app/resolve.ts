import { Injectable } from "@angular/core";  
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";  
import { Observable } from "rxjs";  
import { HttpClient } from '@angular/common/http';
  
@Injectable()
export class HnService {
  endpoint = 'https://hnpwa.com/api/v0/news.json';

  constructor(private http: HttpClient) {}

  getTopPosts() {
    return this.http.get(this.endpoint);
  }
}