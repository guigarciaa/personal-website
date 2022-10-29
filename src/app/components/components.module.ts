import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnchorComponent } from './atoms/anchor/anchor.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';

@NgModule({
  declarations: [
    AnchorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  exports: [AnchorComponent, NavbarComponent]
})
export class ComponentsModule { }
