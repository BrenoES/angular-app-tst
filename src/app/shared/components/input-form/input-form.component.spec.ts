import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { render } from '@testing-library/angular';

import { InputFormComponent } from './input-form.component';

const formControlNameMock = 'answer';

const fg: FormGroup = new FormGroup({
  [`${formControlNameMock}`]: new FormControl(''),
});

const fgd: FormGroupDirective = new FormGroupDirective([], []);
fgd.form = fg;

async function setup() {
  await render(InputFormComponent, {
    imports: [SharedModule],
    providers: [{ provide: ControlContainer, useValue: fgd }],
    componentProperties: {
      formControlName: formControlNameMock,
    },
  });
}

describe('InputFormComponent', () => {
  it('should create', async () => {
    await setup();
  });
});
