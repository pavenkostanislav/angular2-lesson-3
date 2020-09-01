import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ng-class',
  templateUrl: './directive-ng-class.component.html',
  styleUrls: ['./directive-ng-class.component.css'],
})
export class DirectiveNgClassComponent {
  public isVerdana = true;
  public isNavy = true;
  public isSegoe = true;
  public divClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy,
  };
  public pClasses = { segoePrintFont: this.isSegoe };
  public visibility = true;
  public toggle() {
    this.visibility = !this.visibility;
  }
}
