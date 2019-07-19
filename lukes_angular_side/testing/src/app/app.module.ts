import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './page/page.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { global } from './login/passedVar';
import { NavbarComponent } from './login/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule, } from '@angular/common/http';
  
 

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LoginComponent,
    NavbarComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [global,],
  bootstrap: [AppComponent]
})
export class AppModule { }


