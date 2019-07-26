import { Component, OnInit } from '@angular/core';
import { global } from '../../login/passedVar'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private passedVar: global) { 
    console.log(this.passedVar.datadone)
  }

  ngOnInit() {
  }

}
