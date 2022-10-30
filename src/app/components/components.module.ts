import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnchorComponent } from './atoms/anchor/anchor.component';
import { TitleComponent } from './atoms/title/title.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';

@NgModule({
  declarations: [AnchorComponent, NavbarComponent, TitleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  exports: [AnchorComponent, NavbarComponent, TitleComponent],
})
export class ComponentsModule {}
