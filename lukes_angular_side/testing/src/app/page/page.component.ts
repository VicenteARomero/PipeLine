import { Component, OnInit } from '@angular/core';


declare var $WowheadPower: any
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
itemid = 2828

  constructor() { }
  
  ngOnInit() { 
    this.loadScript()

  }


  loadScript(){


  
    $WowheadPower.refreshLinks();
   
  }
  
}
