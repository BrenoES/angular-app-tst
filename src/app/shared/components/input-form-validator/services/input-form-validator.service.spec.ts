import { TestBed } from '@angular/core/testing';

import { InputFormValidatorService } from './input-form-validator.service';

describe('InputFormValidatorService', () => {
  let service: InputFormValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(InputFormValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});