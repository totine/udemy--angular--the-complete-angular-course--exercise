import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt';

import { PostService } from "./services/post.service";
import { GithubFollowersService } from "./services/github-followers.service";
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';

import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppErrorHandler } from "./common/app-error-handler";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule, Http, BaseRequestOptions } from "@angular/http";
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts-component/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import {AuthGuard} from "./services/auth-guard.service";
import {AdminAuthGuard} from "./services/admin-auth-guard.service";




@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
      },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent },
      {
        path: '**',
        component: NotFoundComponent
      }
      ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    OrderService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    // For creating a mock back-end. You don't need these in a real app.
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
