import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ShellModule } from 'projects/core/src/public-api';
import { ShellModule } from '@core/layouts';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
