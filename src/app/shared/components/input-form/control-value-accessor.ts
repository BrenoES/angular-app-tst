import { Component, Injectable, Injector, Input, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';

@Component({ template: '' })
export abstract class ControlValueAccessorConnectorComponent implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective!: FormControlDirective;

  @Input()
  formControl?: FormControl;

  @Input()
  formControlName!: string;

  constructor(private injector: Injector) {}

  get control() {
    return (this.formControl || this.controlContainer?.control?.get(this.formControlName)) as FormControl;
  }

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  get valueAccessor() {
    return this.formControlDirective?.valueAccessor as ControlValueAccessor;
  }

  registerOnTouched(fn: any): void {
    this.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.valueAccessor?.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.valueAccessor.setDisabledState) this.valueAccessor.setDisabledState(isDisabled);
  }
}
