import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnchorComponent } from './anchor.component';

describe('AnchorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AnchorComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AnchorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
