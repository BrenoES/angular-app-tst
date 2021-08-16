/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersService } from './user-list.service';

describe('Service: UserList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
    });
  });

  it('should ...', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
