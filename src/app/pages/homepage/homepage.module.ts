import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomepageComponent } from './homepage.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';

@NgModule({
  declarations: [HomepageComponent, HomeComponent, AboutMeComponent],
  imports: [CommonModule, ComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HomepageComponent],
})
export class HomepageModule {}
