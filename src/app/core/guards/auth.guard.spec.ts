import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { AuthGuard } from './auth.guard';

let guard: AuthGuard;

beforeEach(() => {
  const storeSpy = jest.fn();
  TestBed.configureTestingModule({
    providers: [AuthGuard, { provide: Store, useValue: storeSpy }],
    imports: [HttpClientTestingModule],
    teardown: { destroyAfterEach: false },
  });
});

it('should create', () => {
  guard = TestBed.inject(AuthGuard);
  expect(guard).toBeTruthy();
});
