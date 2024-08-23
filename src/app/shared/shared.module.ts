import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PowerPipe } from './pipes/power.pipe';



@NgModule({
  declarations: [
    // private to the module, where it is declared
    AddressComponent,
    LikeComponent,
    HighlightDirective,
    PowerPipe, // selector, <app-address> use in html
    // internal componet,
    // internal component2
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // to export components those can be used in other modules
    AddressComponent,
    LikeComponent,
    HighlightDirective,
    PowerPipe
  ]
})
export class SharedModule { }
