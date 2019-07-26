import { Item } from 'src/app/interface/item';

export interface User{
    id:number;
    username:string;
    password:string;
    serverName:string;
    region:string;
    items:Item[];
}