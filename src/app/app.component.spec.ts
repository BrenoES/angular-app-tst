import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store } from '@ngxs/store';

let component: ComponentFixture<AppComponent>;

beforeEach(() => {
  const storeSpy = jest.fn();
  TestBed.configureTestingModule({
    declarations: [AppComponent],
    providers: [{ provide: Store, useValue: storeSpy }],
    schemas: [NO_ERRORS_SCHEMA],
    teardown: { destroyAfterEach: false },
  });
});

it('should create', () => {
  component = TestBed.createComponent(AppComponent);
  expect(component).toBeTruthy();
});
