import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SimpleTextComponent } from './simple-text.component';

describe('SimpleTextComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SimpleTextComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SimpleTextComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
