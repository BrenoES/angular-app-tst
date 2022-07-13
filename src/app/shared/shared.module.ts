import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputFormValidatorComponent } from './components/input-form-validator/input-form-validator.component';
import { InputFormComponent } from './components/input-form/input-form.component';

const components: any = [InputFormValidatorComponent, InputFormComponent];

const directives: any = [];

const pipes: any = [];

const sharedDeclarations = [...components, ...directives, ...pipes];
const sharedModule = [AppMaterialModule, CommonModule, ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [...sharedDeclarations],
  imports: [...sharedModule],
  exports: [...sharedDeclarations, ...sharedModule],
})
export class SharedModule {}
