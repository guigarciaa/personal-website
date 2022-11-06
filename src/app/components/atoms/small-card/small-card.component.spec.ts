import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SmallCardComponent } from './small-card.component';

describe('SmallCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SmallCardComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SmallCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
