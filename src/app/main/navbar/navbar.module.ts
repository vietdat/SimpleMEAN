import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavRouter } from './navbar.routes';
import { NavbarComponent }  from './navbar.component';
import { HomeModule } from '../home/home.module';
import { AboutModule } from '../about/about.module';

@NgModule({
  imports:      [ BrowserModule, NavRouter, HomeModule, AboutModule ],
  exports:      [ NavbarComponent ],
  declarations: [ NavbarComponent ],
  bootstrap:    [ NavbarComponent ]
})
export class NavbarModule { }
