import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../interface/item';

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
      
      if(it.name.toLowerCase().match(nameSearch.toLowerCase()) && containItem.length< 10) 
        containItem.push(it);
    }
    return containItem; 
 } 
}
