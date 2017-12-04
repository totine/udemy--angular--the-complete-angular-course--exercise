import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts-component/posts.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {PostService} from "./services/post.service";
import {AppErrorHandler} from "./common/app-error-handler";
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import {GithubFollowersService} from "./services/github-followers.service";


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    GithubFollowersService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
