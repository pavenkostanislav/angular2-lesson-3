import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { SharkDirective } from './directives/shark.directive';
import { Child2Component } from './child2.component';

@Component({
  selector: 'app-my-directive',
  templateUrl: './my-directive.component.html',
  styleUrls: ['./my-directive.component.css'],
})
export class MyDirectiveComponent implements AfterViewInit, OnInit {
  @ViewChild('someInput') someInput: ElementRef;

  @ViewChild(Child2Component) child: Child2Component;

  private extraCreature = 'Пусто';
  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
  }

  ngOnInit(): void {
    console.log(this.extraCreature);
  }
  ngAfterViewInit() {
    console.log(this.extraCreature); // Дельфин
    this.someInput.nativeElement.value = 'Можно прездаполнить значение!';
    console.log(this.child.whoAmI()); // I am a child component!
  }
}
