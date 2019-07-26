import { Component, ViewChild } from '@angular/core';
import { global } from './login/passedVar';
import { Router, NavigationEnd, ChildActivationEnd } from '@angular/router';
import { NavbarComponent } from './login/navbar/navbar.component';
import { auctions } from './login/Models/transactions';
import { HttpClient } from '@angular/common/http';
import { LoadlistService } from './service/loadlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url: string = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/'

  title = 'testing2';
  constructor(private passedVar:global
    ,private router :Router,
    private http: HttpClient,
    private dat:LoadlistService){   
   if(this.passedVar.processesed){
      this.dat.getlist().subscribe(
        data=>{
          passedVar.auctions=data.auctions
          passedVar.datadone = true
        }
      )
   }
      this.passedVar.processesed = false
      
     /*
     passedVar.auctions = 
      [
        {auc:2046327290,item:159535,owner:"Sekcmexi",ownerRealm:"Arthas",bid:2259532,buyout:2300000,quantity:1,timeLeft:"VERY_LONG",},
        {auc:2047441418,item:24588,owner:"Lowkeygreens",ownerRealm:"Arthas",bid:32516400,buyout:32516400,quantity:4,timeLeft:"VERY_LONG",}
        ]
        */
    }
   

}
