import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Comments } from '@modules/posts/interfaces';
import { PostsService } from '@modules/posts/services';

interface DialogData {
  postId: number;
}

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.scss'],
})
export class PostsCommentsComponent implements OnInit {
  public comments$!: Observable<Comments>;
  constructor(
    private postsService: PostsService,
    public dialogRef: MatDialogRef<PostsCommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    const { postId } = this.data;
    this.getCommentsPost(postId);
  }

  getCommentsPost(postId: number) {
    this.comments$ = this.postsService.getCommentsPost(postId);
  }

  close() {
    this.dialogRef.close();
  }
}
