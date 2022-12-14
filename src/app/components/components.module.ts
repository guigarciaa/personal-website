import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnchorComponent } from './atoms/anchor/anchor.component';
import { TitleComponent } from './atoms/title/title.component';
import { NavbarComponent } from './organisms/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubTitleComponent } from './atoms/sub-title/sub-title.component';
import { TitleSectionComponent } from './molecules/title-section/title-section.component';
import { ButtonComponent } from './atoms/button/button.component';
import { SmallButtonComponent } from './atoms/small-button/small-button.component';
import { SimpleTextComponent } from './atoms/simple-text/simple-text.component';
import { SmallCardComponent } from './atoms/small-card/small-card.component';
import { SmallIconComponent } from './atoms/small-icon/small-icon.component';
import { SmallCardInfosComponent } from './organisms/small-card-infos/small-card-infos.component';
import { BigPictureComponent } from '@atoms/big-picture/big-picture.component';
import { SectionComponent } from '@atoms/section/section.component';

@NgModule({
  declarations: [
    AnchorComponent,
    NavbarComponent,
    TitleComponent,
    SubTitleComponent,
    TitleSectionComponent,
    ButtonComponent,
    SmallButtonComponent,
    SimpleTextComponent,
    SmallCardComponent,
    SmallIconComponent,
    SmallCardInfosComponent,
    BigPictureComponent,
    SectionComponent,
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
    SmallButtonComponent,
    SimpleTextComponent,
    SmallCardComponent,
    SmallIconComponent,
    SmallCardInfosComponent,
    BigPictureComponent,
    SectionComponent,
  ],
})
export class ComponentsModule {}
