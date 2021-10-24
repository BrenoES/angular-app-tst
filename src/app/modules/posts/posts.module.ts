import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { PostsCommentsComponent } from './posts-comments/posts-comments.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, PostsRoutingModule, MatListModule, MatIconModule, MatDialogModule],
  declarations: [PostsComponent, PostsCommentsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsModule {}
