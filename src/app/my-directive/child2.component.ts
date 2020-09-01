import { Component } from '@angular/core';

@Component({
  selector: 'app-child-2',
  // tslint:disable-next-line:quotemark
  template: `
    <p>начало</p>
    <ng-content></ng-content>
    <p>конец</p>
  `,
})
export class Child2Component {
  whoAmI() {
    return 'Да! Я тот самый дочерний компонент.';
  }
}
