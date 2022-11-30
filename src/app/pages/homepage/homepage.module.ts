import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomepageComponent } from './homepage.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutMeComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { FrontendMeComponent } from './sections/experience/slides/frontend/frontend.component';
import { BackendMeComponent } from './sections/experience/slides/backend/backend.component';

@NgModule({
  declarations: [
    HomepageComponent,
    HomeComponent,
    AboutMeComponent,
    ExperienceComponent,
    FrontendMeComponent,
    BackendMeComponent
  ],
  imports: [CommonModule, ComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HomepageComponent],
})
export class HomepageModule {}
