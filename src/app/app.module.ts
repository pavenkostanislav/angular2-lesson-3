import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DirectiveNgClassModule } from './directive-ng-class/directive-ng-class.module';
import { DirectiveNgStyleModule } from './directive-ng-style/directive-ng-style.module';
import { LifecycleModule } from './lifecycle/lifecycle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LifecycleModule,
    DirectiveNgClassModule,
    DirectiveNgStyleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
