import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SmallButtonComponent } from './small-button.component';

describe('SmallButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SmallButtonComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SmallButtonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
