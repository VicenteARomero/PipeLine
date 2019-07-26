import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../Models/User';
import { global } from '../passedVar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterEvent, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User
  username: string
  password: string
  hide = true;


  constructor(private passedVar: global,
    public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(loginpop, {
     
      
      data: { username: this.username, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.user = result;
      console.log(this.user)
    });
  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
}
@Component({
  selector: 'login',
  templateUrl: 'dialogbox.html',
  styleUrls: ['./navbar.component.css']
})
export class loginpop {
  flag: boolean;
  badlogin: boolean;

  ngOnInit() {
  this.flag = false
 
  }
  constructor(
    private passedVar: global,
    public dialogRef: MatDialogRef<loginpop>,
    private http: HttpClient,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: User) {

     }
  url: string = 'http://ec2-18-191-249-103.us-east-2.compute.amazonaws.com:8088/TestPiple/Api/'
  onNoClick(): void {
    this.dialogRef.close();

  }
  login() {

    console.log(this.data)
    this.flag = !this.flag
    this.http.post<User>(this.url+"login", this.data, httpOptions).subscribe(
      data => {
        this.passedVar.loggeduser = data
        console.log(this.passedVar.loggeduser),
        this.passedVar.logged = !this.passedVar.logged
        this.badlogin= false
      }, error => {
        console.log(error)
        this.badlogin = true
        this.delay(500).then(any => this.flag = !this.flag) //jank way to stop inputs spam, only unlocks after 500 ms
      }

    )
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log(""));
  }
  register(){
    this.flag = !this.flag
    this.http.post<User[]>(this.url+"create", this.data, httpOptions).subscribe(
      data => {
        console.log(data),
        this.passedVar.loggeduser = data[0]
        this.passedVar.logged = !this.passedVar.logged
      }, error => {
        console.log(error)
        this.badlogin = true
        this.delay(500).then(any => this.flag = !this.flag) //jank way to stop inputs spam, only unlocks after 500 ms
      })
  }
  resetLoginBoolean(){
    console.log("Fired");
    this.badlogin = false
  }
  
}
