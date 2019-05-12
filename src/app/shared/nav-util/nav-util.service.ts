import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavUtilService {
  constructor(
    private router: Router
  ) { }


  back() {
    window.history.go(-1);
  }
}
