import { AuthGuard } from './../auth/guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';

const routeConfig: Route[] = [
  {
    path: 'products',
    component: ProductHomeComponent,
    children: [
      {
        path: '', // default
        component: ProductListComponent 
      },
      {
        path: 'create',
        component: ProductEditComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit/:id', // localhost:4200/products/edit/3232
        component: ProductEditComponent
        ,
        canActivate: [AuthGuard]
      },
      {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ProductHomeComponent, ProductListComponent, ProductEditComponent, ProductSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfig),
    FormsModule
  ]
})
export class ProductModule { }
