import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { PageComponent } from './page/page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
