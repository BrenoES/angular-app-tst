import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { AlbumsService } from './albums.service';

describe('Service: Albums', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumsService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([AlbumsService], (service: AlbumsService) => {
    expect(service).toBeTruthy();
  }));
});
