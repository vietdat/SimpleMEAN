import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
// import { DataService } from './firstTest/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule              // <-Add HttpModule
  ],
  providers: [], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }
