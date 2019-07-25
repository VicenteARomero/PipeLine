import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { global } from '../login/passedVar';
import { auctions } from '../login/Models/transactions';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
declare var $WowheadPower: any

const list:auctions[]=[
{auc:2046327290,item:159535,owner:"Sekcmexi",ownerRealm:"Arthas",bid:2259532,buyout:2300000,quantity:1,timeLeft:"VERY_LONG",},
{auc:2047441418,item:24588,owner:"Lowkeygreens",ownerRealm:"Arthas",bid:32516400,buyout:32516400,quantity:4,timeLeft:"VERY_LONG",}
]
@Component({
  selector: 'app-page',
  styleUrls: ['page.component.css'],
  templateUrl: 'page.component.html',
})
export class PageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'owner', 'color', 'buyout'];
  dataSource: MatTableDataSource<auctions>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private passedVar: global,) {
   

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(list);
    
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  loadScript(){
    $WowheadPower.refreshLinks()
    
  }
}

