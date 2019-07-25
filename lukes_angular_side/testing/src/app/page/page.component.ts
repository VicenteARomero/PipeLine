import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { global } from '../login/passedVar';
import { auctions } from '../login/Models/transactions';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Item } from '../interface/item';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
declare var $WowheadPower: any

const list: auctions[] = [
  { auc: 2046327290, item: 159535, owner: "Sekcmexi", ownerRealm: "Arthas", bid: 222259532, buyout: 2300000, quantity: 1, timeLeft: "VERY_LONG", },
  { auc: 2047441418, item: 24588, owner: "Lowkeygreens", ownerRealm: "Arthas", bid: 32516400, buyout: 32516400, quantity: 4, timeLeft: "VERY_LONG", },
  { auc: 2047441418, item: 55419, owner: "Lowkeygreens", ownerRealm: "Arthas", bid: 825216400, buyout: 32516400, quantity: 4, timeLeft: "VERY_LONG", },
  { auc: 2047441418, item: 168642, owner: "Lowkeygreens", ownerRealm: "Arthas", bid: 9016400, buyout: 32516400, quantity: 4, timeLeft: "VERY_LONG", }
]
@Component({
  selector: 'app-page',
  styleUrls: ['page.component.css'],
  templateUrl: 'page.component.html',
})
export class PageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'quantity', 'owner', 'bid', 'buyout', 'timeLeft','name'];
  dataSource: MatTableDataSource<auctions>;
  it: Item

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  constructor(private passedVar: global,private route: ActivatedRoute) {
   

  constructor(private passedVar: global, ) {


    // Assign the data to the data source for the table to render
    for (let index = 0; index < list.length; index++) {
      console.log(list[0].bid)
      list[index].buyout = (list[index].buyout / 1000)
      list[index].buyout = list[index].buyout.toFixed(0)
      list[index].bid = (list[index].bid / 1000)
      list[index].bid = list[index].bid.toFixed(0)
      list[index].timeLeft = (list[index].timeLeft.replace("_", " "))
      list[index].ownerRealm = this.checkjson(list[index].item)
    }
   
    this.dataSource = new MatTableDataSource(list);

  }

  ngOnInit() {

    this.it ={
      id:+this.route.snapshot.paramMap.get('id'),
      name:this.route.snapshot.paramMap.get('name'),
      quality:+this.route.snapshot.paramMap.get('quality')
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
   
  }
  checkjson(itemnumber:number){
    console.log(list[0].bid+"fun")
    return this.passedVar.itemlist.find(x=>x.id==itemnumber).name
    
  }
}

