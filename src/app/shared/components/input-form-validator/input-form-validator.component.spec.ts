import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormValidatorComponent } from './input-form-validator.component';

describe('InputFormValidatorComponent', () => {
  let component: InputFormValidatorComponent;
  let fixture: ComponentFixture<InputFormValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFormValidatorComponent],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
