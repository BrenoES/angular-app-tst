import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsCommentsComponent } from './posts-comments/posts-comments.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, PostsRoutingModule, SharedModule],
  declarations: [PostsComponent, PostsCommentsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsModule {}
