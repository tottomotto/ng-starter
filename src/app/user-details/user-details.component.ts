import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, shareReplay } from 'rxjs/operators';
import { NavUtilService } from '../shared/nav-util/nav-util.service';
import { User } from '../shared/users/data/user';
import { UsersService } from '../shared/users/users.service';

@Component({
  selector: 'pe-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    public navUtil: NavUtilService,
  ) { }

  ngOnInit() {
    this.user$ = this.activatedRoute.params.pipe(
      mergeMap(({userId}) => this.usersService.user(userId)),
      shareReplay(1),
    );
  }
}
