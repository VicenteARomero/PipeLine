import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interface/item';
import { SearchItemNamePipe } from '../../pipe/search-item-name.pipe';




@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  private _jsonURL = 'assets/ItemList.json';
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
    //Get the Json of the ItemList
    public getJSON(): Observable<any> {
      return this.http.get(this._jsonURL);
    }

  ngOnInit() {}
  
  //When an item is clicked in the table will then load another component with item details
  loadItemPage(clickedItem: Item){
    location.href = 'https://www.crunchyroll.com/home'
  }


}
