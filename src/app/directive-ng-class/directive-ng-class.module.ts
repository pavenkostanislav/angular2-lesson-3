import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveNgClassComponent } from './directive-ng-class.component';



@NgModule({
  declarations: [DirectiveNgClassComponent],
  exports: [DirectiveNgClassComponent],
  imports: [
    CommonModule
  ]
})
export class DirectiveNgClassModule { }
