import { Injectable } from '@angular/core';
import { User } from './Models/User';
import { Item } from '../interface/item';
import { auctions } from './Models/transactions';

@Injectable()
export class global{
    loaded:boolean=false
    logged:boolean = true
    loggeduser:User
    itemlist:Item[] 
    auctions:auctions[]
    
}