import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnchorComponent } from './atoms/anchor/anchor.component';
import { TitleComponent } from './atoms/title/title.component';
import { NavbarComponent } from './organisms/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubTitleComponent } from './atoms/sub-title/sub-title.component';
import { TitleSectionComponent } from './molecules/title-section/title-section.component';
import { ButtonComponent } from './atoms/button/button.component';
import { ButtonSmallComponent } from './atoms/button-small/button-small.component';
import { SimpleTextComponent } from './atoms/simple-text/simple-text.component';

@NgModule({
  declarations: [
    AnchorComponent,
    NavbarComponent,
    TitleComponent,
    SubTitleComponent,
    TitleSectionComponent,
    ButtonComponent,
    ButtonSmallComponent,
    SimpleTextComponent
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [],
  exports: [
    AnchorComponent,
    NavbarComponent,
    TitleComponent,
    SubTitleComponent,
    TitleSectionComponent,
    ButtonComponent,
    ButtonSmallComponent,
    SimpleTextComponent
  ],
})
export class ComponentsModule {}
