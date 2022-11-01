import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnchorComponent } from './atoms/anchor/anchor.component';
import { TitleComponent } from './atoms/title/title.component';
import { NavbarComponent } from './organisms/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AnchorComponent, NavbarComponent, TitleComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [],
  exports: [AnchorComponent, NavbarComponent, TitleComponent],
})
export class ComponentsModule {}
