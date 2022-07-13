import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { HTTPReqResInterceptor } from '@core/interceptors/http-req-res.interceptor';
import { environment } from '@env';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { states } from '@shared/states';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    LoadingBarRouterModule,
    NgxsModule.forRoot([...states], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token',
    }),
    SharedModule,
  ],
  providers: [
    { provide: 'BASE_URL', useValue: environment.baseurl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPReqResInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
