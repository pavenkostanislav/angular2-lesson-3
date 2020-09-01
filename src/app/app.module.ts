import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LifecycleModule } from './lifecycle/lifecycle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LifecycleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
