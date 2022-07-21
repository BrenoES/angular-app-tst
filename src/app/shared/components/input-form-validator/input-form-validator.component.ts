import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { InputFormValidatorService } from './services/input-form-validator.service';

@Component({
  selector: 'app-input-form-validator',
  templateUrl: './input-form-validator.component.html',
  styleUrls: ['./input-form-validator.component.scss'],
})
export class InputFormValidatorComponent {
  @Input()
  control!: AbstractControl;

  get messageError() {
    const errorsControl = this.control.errors ?? {};
    const [errorMessage] = Object.keys(errorsControl).map((propertyName) => {
      if (this.control.hasError(propertyName) && this.control.touched) {
        return InputFormValidatorService.getValidatorErrorMessage(propertyName, this.control.getError(propertyName));
      }
      return null;
    });

    return errorMessage;
  }
}
