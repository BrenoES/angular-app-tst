import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { TodosService } from './todos.service';

describe('Service: Todos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosService],
      imports: [HttpClientTestingModule],
      teardown: { destroyAfterEach: false },
    });
  });

  it('should ...', inject([TodosService], (service: TodosService) => {
    expect(service).toBeTruthy();
  }));
});
