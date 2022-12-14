import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from '../../components.module';
import { TitleSectionComponent } from './title-section.component';

describe('TitleSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,ComponentsModule],
      declarations: [TitleSectionComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TitleSectionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
