import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [NavigationComponent],
})
export class CoreModule {
  /* make sure CoreModule is imported only by the AppModule and noone else */
  constructor(@Optional() @SkipSelf() presentInParent: CoreModule) {
    if (presentInParent) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
