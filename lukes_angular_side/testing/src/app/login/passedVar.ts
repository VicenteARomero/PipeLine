import { Injectable } from '@angular/core';
import { User } from './Models/User';

@Injectable()
export class global{
    logged:boolean = true
    loggeduser:User
}