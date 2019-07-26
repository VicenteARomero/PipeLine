import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { PageComponent } from './page/page.component';
import { HnResolver } from './resolver';
import { WelcomeComponent } from './component/welcome/welcome.component';

const routes: Routes = [
  {path : 'server-select' ,
  component : LoginComponent},
  {
    path :'wishlist',
    component: WishlistComponent
  },
  {
    path: 'itempage',
    component: PageComponent
  },
  {
    path: '',
    component: WelcomeComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
