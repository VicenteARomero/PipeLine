import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../login/Models/Item'

@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'searchItemName'
})
export class SearchItemNamePipe implements PipeTransform {

  transform(items: Item [], itemName : string) {
    if(itemName && itemName.length > 1){
      return this.isSimilar(items, itemName);
    }
  }
  isSimilar(element: Item[], nameSearch:string) {
    var containItem: Array<Item>= [];
  
    for(let it of element){
      
      if(it.name.toLowerCase().match(nameSearch.toLowerCase())) 
        containItem.push(it);
    }
    return containItem; 
 } 
}