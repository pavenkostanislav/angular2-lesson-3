import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharkDirective } from './directives/shark.directive';
import { MyDirectiveComponent } from './my-directive.component';
import { Child2Component } from './child2.component';

@NgModule({
  declarations: [SharkDirective, MyDirectiveComponent, Child2Component],
  exports: [MyDirectiveComponent],
  imports: [CommonModule],
})
export class MyDirectiveModule {}
