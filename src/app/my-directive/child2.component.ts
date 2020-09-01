import { Component } from '@angular/core';

@Component({
  selector: 'app-child-2',
  template: '<ng-content></ng-content>',
})
export class Child2Component {
  whoAmI() {
    return 'Да! Я тот самый дочерний компонент.';
  }
}
