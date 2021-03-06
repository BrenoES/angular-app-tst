import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved, fireEvent } from '@testing-library/angular';
import { PostsModule } from '@modules/posts/posts.module';
import { PostsService } from '@modules/posts/services';
import { PostsCommentsComponent } from './posts-comments.component';

const expectedComments = [
  {
    postId: 1,
    id: 1,
    name: 'usuario',
    email: 'email@email.com',
    body: 'corpo do comentário',
  },
  {
    postId: 1,
    id: 2,
    name: 'fulano',
    email: 'email@email2.com',
    body: 'comentário 2',
  },
];
const closeFn = jest.fn();

const MatDialogRefMock: Partial<MatDialogRef<PostsCommentsComponent>> = {
  close: closeFn,
};

const data = {
  postId: 1,
};

async function setup() {
  await render(PostsCommentsComponent, {
    imports: [MatDialogModule, PostsModule],
    componentProviders: [{ provide: PostsService, useValue: { getCommentsPost: () => of(expectedComments) } }],
    providers: [
      { provide: MatDialogRef, useValue: MatDialogRefMock },
      { provide: MAT_DIALOG_DATA, useValue: data },
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  });
}

describe('PostsCommentsComponent', () => {
  it('should render all comments when starting component', async () => {
    // Cenário
    // jest.useFakeTimers();
    await setup();
    // jest.advanceTimersByTime(1_00);
    // Ação
    const listItems = screen.getAllByRole('listitem');
    // Expectativa
    expect(listItems).toHaveLength(expectedComments.length);
    expectedComments.forEach((expectedComment) => {
      screen.getByText(new RegExp(expectedComment.name, 'i'));
      screen.getByText(new RegExp(expectedComment.email, 'i'));
      screen.getByText(new RegExp(expectedComment.body, 'i'));
    });
  });

  it('should close component when #close called', async () => {
    // Cenário
    await setup();
    // Ação
    const closeButton = screen.getByTestId('closeComments');
    fireEvent.click(closeButton);

    // Expectativa
    expect(closeFn).toHaveBeenCalledTimes(1);
  });
});
