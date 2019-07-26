import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { global } from '../login/passedVar';
import { auctions } from '../login/Models/transactions';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Item } from '../interface/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoadlistService } from '../service/loadlist.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
declare var $WowheadPower: any
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
}

@Component({
  selector: 'app-page',
  styleUrls: ['page.component.css'],
  templateUrl: 'page.component.html',
})
export class PageComponent implements OnInit {
  displayedColumns: string[] = ['name','id', 'quantity', 'owner', 'bid', 'buyout', 'timeLeft',];
  dataSource: MatTableDataSource<auctions>;
  it: Item

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  url: string = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/'
  list: auctions[];
  constructor(private passedVar: global,
    private route: ActivatedRoute,
    private http: HttpClient,
    private dat:LoadlistService) {
 //this.dat.getlist().subscribe()
 this.list = this.passedVar.auctions
 this.dataSource = new MatTableDataSource(this.list);
  }

  ngOnInit() {
    console.log(this.passedVar.auctions)
    
    this.it ={
      id:+this.route.snapshot.paramMap.get('id'),
      name:this.route.snapshot.paramMap.get('name'),
      quality:+this.route.snapshot.paramMap.get('quality')
      
    }  
    for (let index = 0; index < this.list.length; index++) {
     // this.list[index].ownerRealm = this.checkjson(this.list[index].item)
    }

    // Assign the data to the data source for the table to render
    for (let index = 0; index < this.list.length; index++) {
      console.log(this.list[0].bid)
      this.list[index].buyout = (this.list[index].buyout / 1000)
      this.list[index].buyout = this.list[index].buyout.toFixed(0)
      this.list[index].bid = (this.list[index].bid / 1000)
      this.list[index].bid = this.list[index].bid.toFixed(0)
      this.list[index].timeLeft = (this.list[index].timeLeft.replace("_", " "))
    
    }
    console.log(this.it)
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadScript() {
    $WowheadPower.refreshLinks()
    this.applyFilter(this.it.name)
  }
  checkjson(itemnumber:number){
    return this.passedVar.itemlist.find(x=>x.id==itemnumber).name
  }
  addf(serialNumber:number,name:string,member_id:number){
    var send = { 
    serialNumber : serialNumber,
    name :name,
    member_id:member_id}
    console.log(send)
    
      this.http.post(this.url+"addFavorite", send, httpOptions).subscribe(
        data => {
          console.log(data)
          
        }, error => {
          console.log(error)
          
          
        })
    }
 
  }
  


