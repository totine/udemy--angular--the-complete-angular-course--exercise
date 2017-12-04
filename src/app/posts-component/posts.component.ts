import { Component, OnInit } from '@angular/core';
import { PostService } from "../services/post.service";
import { AppError } from "../common/app-error";
import { NotFoundError } from "../common/not-found-error";
import { BadInput } from "../common/bad-input";

@Component({
  selector: 'posts-component',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css']
})


export class PostsComponent implements OnInit {

  posts: any[];


  constructor(private service: PostService) {

  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = '';

    this.service.create(post)
      .subscribe(newPost => {
          post['id'] = newPost.id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
              // form.setErrors(error.errorValue);
          }
          else throw error;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost)
        });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1)
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
        });
  }

}
