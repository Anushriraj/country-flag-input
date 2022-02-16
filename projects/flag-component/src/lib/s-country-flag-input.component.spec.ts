import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SCountryFlagInputComponent } from './s-country-flag-input.component';


describe('SCountryFlagInputComponent', () => {
  let component: SCountryFlagInputComponent;
  let fixture: ComponentFixture<SCountryFlagInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCountryFlagInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SCountryFlagInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
