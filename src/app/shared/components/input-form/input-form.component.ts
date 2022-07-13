import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnectorComponent } from './control-value-accessor';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputFormComponent),
    },
  ],
})
export class InputFormComponent extends ControlValueAccessorConnectorComponent {
  @Input() name: any;
  @Input() id: any;
  @Input() label: any;
  @Input() type: any;
  constructor(injector: Injector) {
    super(injector);
  }
}
