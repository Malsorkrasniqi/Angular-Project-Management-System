import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [ 
{
    path: "products", 
    component: ProductsComponent,
  
},
{
  path: "home", 
  component: HomeComponent,

},
 
  {
  path: "login", 
  component: LoginComponent,


},
{
  path:'', redirectTo:'/login', pathMatch:'full'
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
