import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SfwCountryFlagInputComponent } from './sfw-country-flag-input.component';


describe('SfwCountryFlagInputComponent', () => {
  let component: SfwCountryFlagInputComponent;
  let fixture: ComponentFixture<SfwCountryFlagInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfwCountryFlagInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfwCountryFlagInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
