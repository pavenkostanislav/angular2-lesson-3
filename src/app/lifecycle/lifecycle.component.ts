import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent {
  name: string;
  logs: string[] = [];
  showChild = true;

  constructor() {
    this.name = 'Alice';
    setTimeout(() => this.updateName(), 5000);
    setTimeout(() => this.hideChild(), 10000);
  }

  updateName() {
    this.name = 'Bob';
  }

  hideChild() {
    this.showChild = false;
    this.logs.push(`onDestroy`);
  }

  onLog(data) {
    this.logs.push(data);
  }
}
