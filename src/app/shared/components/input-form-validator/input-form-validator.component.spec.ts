import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormValidatorComponent } from './input-form-validator.component';
import { render } from '@testing-library/angular';
import { InputFormValidatorService } from './services/input-form-validator.service';
import { FormControl, Validators } from '@angular/forms';

async function setup() {
  await render(InputFormValidatorComponent, {
    providers: [InputFormValidatorService],
    componentProperties: {
      control: new FormControl('', Validators.required),
    },
  });
}
describe('InputFormValidatorComponent', () => {
  it('should create', async () => {
    await setup();
  });
});
