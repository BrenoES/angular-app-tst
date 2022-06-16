import * as shared from '@shared/index';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './modules/material.module';

const sharedDeclarations = [...shared.components, ...shared.directives, ...shared.pipes];
const sharedModule = [AppMaterialModule, CommonModule];

@NgModule({
  declarations: [...sharedDeclarations],
  imports: [...sharedDeclarations, ...sharedModule],
  exports: [...sharedDeclarations, ...sharedModule],
})
export class SharedModule {}
