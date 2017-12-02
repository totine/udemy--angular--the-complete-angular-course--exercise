import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsComponent } from './posts-component/posts.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
