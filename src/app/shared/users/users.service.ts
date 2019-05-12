import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from './data/user';
import { UsersResponse } from './data/users-response';

const basePath = 'https://reqres.in/api';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersCache = new Map<number, Observable<UsersResponse>>();
  private detailsCache = new Map<number, Observable<User>>();

  constructor(private http: HttpClient) {

  }

  users(page: number): Observable<UsersResponse> {
    let observable = this.usersCache.get(page);

    if (!observable) {
      observable = this.http.get<UsersResponse>(`${basePath}/users`, {
        params: {
          page: page.toString()
        }
      }).pipe(
        shareReplay(1),
      );

      this.usersCache.set(page, observable);
    }

    return observable;
  }

  user(userId: number): Observable<User> {
    let observable = this.detailsCache.get(userId);

    if (!observable) {
      const id = encodeURI(userId.toString());

      observable = this.http.get<User>(`${basePath}/users/${id}`).pipe(
        map((response: Params) => response.data),
        shareReplay(1),
      );

      this.detailsCache.set(userId, observable);
    }

    return observable;

  }
}
