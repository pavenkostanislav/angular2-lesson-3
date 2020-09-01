import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectiveNgStyleComponent } from './directive-ng-style.component';

@NgModule({
  declarations: [DirectiveNgStyleComponent],
  exports: [DirectiveNgStyleComponent],
  imports: [CommonModule],
})
export class DirectiveNgStyleModule {}
