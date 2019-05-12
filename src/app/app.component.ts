import { Component, OnInit } from '@angular/core';
import { NavUtilService } from './shared/nav-util/nav-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'payever';

  constructor(
  ) {
  }

  ngOnInit(): void {
  }
}
