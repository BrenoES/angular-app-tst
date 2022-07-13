import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';

import { PostsComponent } from '@modules/posts/views';
import { PostsCommentsComponent } from '@modules/posts/components';
import { PostsRoutingModule } from '@modules/posts/posts-routing.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, PostsRoutingModule, SharedModule],
  declarations: [PostsComponent, PostsCommentsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostsModule {}
