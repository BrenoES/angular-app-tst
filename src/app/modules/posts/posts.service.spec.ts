import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { PostsService } from './posts.service';
import { environment } from '../../../environments/environment.prod';

describe(`Service: ${PostsService.name}`, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService],
      imports: [HttpClientTestingModule],
    });
  });

  it('should ...', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));

  it('deve retornar todos os posts quando chamar #getAll()', inject(
    [PostsService, HttpTestingController],
    fakeAsync((service: PostsService, httpMock: HttpTestingController) => {
      const fakeBody = [
        {
          userId: 1,
          id: 1,
          title: 'sunt aut ',
          body: 'quia et ',
        },
      ];

      service.getAll().subscribe((response) => {
        expect(response.length).toBe(1);
        expect(response).toEqual(fakeBody);
      });

      const request = httpMock.expectOne((req) => req.method === 'GET');
      request.flush(fakeBody);
      tick(200);
    })
  ));

  it('deve obter o post pelo ID quando chamar #getPostById()', inject(
    [PostsService, HttpTestingController],
    fakeAsync((service: PostsService, httpMock: HttpTestingController) => {
      const postId = 2;
      const fakeBody = {
        userId: 1,
        id: 2,
        title: 'sunt aut ',
        body: 'quia etsss ',
      };
      service.getPostById(postId).subscribe((response) => {
        expect(response.id === postId).toBe(true);
      });

      const request = httpMock.expectOne(`posts/${postId}`);
      request.flush(fakeBody);
      tick(200);
      expect(request.request.method).toEqual('GET');
    })
  ));
});
