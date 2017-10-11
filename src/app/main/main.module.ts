import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent }  from './main.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  imports:      [ BrowserModule, NavbarModule ],
  exports:      [ MainComponent ],
  declarations: [ MainComponent ],
  bootstrap:    [ MainComponent ]
})
export class MainModule { }
