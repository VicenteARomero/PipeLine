import { Injectable } from '@angular/core';
import { User } from './Models/User';
import { Item } from '../interface/item';

@Injectable()
export class global{
    loaded:boolean=false
    logged:boolean = true
    loggeduser:User
    itemlist:Item[]
}