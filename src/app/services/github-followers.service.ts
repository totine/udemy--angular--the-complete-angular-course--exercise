import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class GithubFollowersService {

  constructor(http: Http) {
    super('https://api.github.com/users/mosh-hamedani/followers', http)
  }

}
