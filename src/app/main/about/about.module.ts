import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent }  from './about.component';
import { AboutHeaderComponent } from './about-header.component';
import { AboutMeComponent } from './about-me.component';
import { AboutContactComponent } from './about-contact.component';
import { AboutProductComponent } from './about-product.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AboutComponent, AboutHeaderComponent, AboutMeComponent, AboutContactComponent, AboutProductComponent ],
  bootstrap:    [ AboutComponent, AboutHeaderComponent, AboutMeComponent, AboutContactComponent, AboutProductComponent ]
})
export class AboutModule { }
