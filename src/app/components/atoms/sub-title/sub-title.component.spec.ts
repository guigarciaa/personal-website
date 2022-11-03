import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SubTitleComponent } from './sub-title.component';

describe('SubTitleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SubTitleComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SubTitleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
