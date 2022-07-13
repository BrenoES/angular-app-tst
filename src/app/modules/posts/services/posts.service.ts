import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post, Posts, Comments } from '@modules/posts/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  getPostsUser(userID: string) {
    return this.httpClient.get<Posts>('posts', { params: { userId: userID } });
  }

  getPostById(id: number) {
    return this.httpClient.get<Post>(`posts/${id}`);
  }

  getCommentsPost(id: number) {
    return this.httpClient.get<Comments>(`posts/${id}/comments`);
  }

  getAll() {
    return this.httpClient.get<Posts>('posts');
  }
}
