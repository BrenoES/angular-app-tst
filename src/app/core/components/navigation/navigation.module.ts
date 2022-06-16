import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NavigationComponent } from './navigation.component';
@NgModule({
  declarations: [NavigationComponent],
  imports: [SharedModule],
  exports: [NavigationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavigationModule {}
