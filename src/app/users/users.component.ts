import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, mergeMap, share, tap } from 'rxjs/operators';
import { PagingInfo } from '../shared/paging/paging-info';
import { User } from '../shared/users/data/user';
import { UsersService } from '../shared/users/users.service';

@Component({
  selector: 'pe-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  currentPage$: Observable<number>;

  pagingInfo: PagingInfo;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.currentPage$ = this.activatedRoute.queryParams.pipe(
      map(({page}) => page ? parseInt(page, 10) : 1),
      filter(page => !isNaN(page) && page > 0),
      distinctUntilChanged(),
    );

    this.users$ = this.currentPage$.pipe(
      mergeMap(page => this.usersService.users(page)),
      map(response => {
        const {data: users, ...pagingInfo} = response;

        this.pagingInfo = pagingInfo;
        return users;
      }),
    );
  }


}
