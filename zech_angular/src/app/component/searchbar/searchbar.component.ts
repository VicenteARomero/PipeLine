import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  private _jsonURL = 'assets/tblDBCItem.json';
  private elements: any []
  searchText: string = '';
  previous: string;

  //grabs the json file and then loads it in the elements array
  //Which the html grabs and populates the table
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     this.elements = data;
    });
  }  
  
    public getJSON(): Observable<any> {
      return this.http.get(this._jsonURL);
    }

  ngOnInit() {}
 


}
