import { Component, OnInit, Input } from '@angular/core';
import { delay } from 'q';
declare var $WowheadPower
@Component({
  selector: 'row',
  template: `
  <h6>
  <a href="https://www.wowhead.com/item={{itemId}} "  data-wh-icon-size="large">Loading...</a>
  
  </h6>
  `
})


export class MyComponent implements OnInit
{
  @Input() itemId: string;

  

  public ngOnInit(): void
  {
      delay(250).then(this.loadScript )
      
      
  }
  loadScript(){
    $WowheadPower.refreshLinks()
  }
}
