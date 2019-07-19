import { Component } from '@angular/core';
import { global } from './login/passedVar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing2';
  constructor(private passedVar:global){}
  
}
