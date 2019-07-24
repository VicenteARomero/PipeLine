import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../Models/User';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:User 
  username:string
  password:string
  hide = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(loginpop, {
      width: '250px',
      data: {username: this.username, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      this.user = result;
      console.log(this.user)
    });
  }
}
@Component({
  selector: 'login',
  templateUrl: 'dialogbox.html',
})
export class loginpop {

  constructor(
    public dialogRef: MatDialogRef<loginpop>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  onNoClick(): void {
    this.dialogRef.close();
    
  }

}