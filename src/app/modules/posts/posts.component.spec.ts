import { PostsComponent } from './posts.component';
import { render, screen } from '@testing-library/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { PostsModule } from './posts.module';
import { PostsService } from './posts.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import userEvent from '@testing-library/user-event';

const expectedPosts = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore',
  },
];

async function setup() {
  await render(PostsComponent, {
    imports: [MatDialogModule, PostsModule],
    componentProviders: [
      {
        provide: PostsService,
        useValue: { getPostsUser: () => of(expectedPosts), getCommentsPost: () => of([]) },
      },
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            params: of({ id: 1 }),
          },
        },
      },
    ],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
}

describe(PostsComponent.name, () => {
  test('should render all post when starting component', async () => {
    // Cenário
    await setup();
    // Ação
    const postComponent = screen.getAllByRole('listitem');
    //Expectativa
    expect(postComponent).toHaveLength(expectedPosts.length);
    expectedPosts.forEach((expectedPost) => {
      screen.getByText(new RegExp(expectedPost.title, 'i'));
      screen.getByText(new RegExp(expectedPost.body, 'i'));
    });
  });

  test('should open and close modal by clicking #ver comentário and #fechar respectively', async () => {
    // Cenário
    await setup();

    // Ação
    const openCommentButtons = await screen.findAllByRole('button', { name: /ver comentários/i });
    userEvent.click(openCommentButtons[0]);
    await screen.findByRole('dialog');
    await screen.findByRole('heading', { name: /Comentários/i });
    const closeButton = await screen.findByRole('button', { name: /fechar/i });
    userEvent.click(closeButton);
    const commentsTitle = screen.queryByRole('heading', { name: /Comentários/i });

    //Expectativa
    expect(commentsTitle).not.toBeInTheDocument();
  });
});
