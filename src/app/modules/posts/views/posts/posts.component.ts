import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { PostsService } from '@modules/posts/services';
import { Posts } from '@modules/posts/interfaces';
import { PostsCommentsComponent } from '@modules/posts/components';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts$!: Observable<Posts>;

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    const { userId } = this.activatedRoute.snapshot.params;
    this.getPostsUser(userId);
  }

  getPostsUser(userID: string) {
    this.posts$ = this.postsService.getPostsUser(userID);
  }

  openComments(postId: number) {
    this.dialog.open(PostsCommentsComponent, {
      data: { postId },
    });
  }
}
