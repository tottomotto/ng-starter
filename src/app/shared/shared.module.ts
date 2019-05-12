import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagingComponent } from './paging/paging.component';
import { UsersService } from './users/users.service';

@NgModule({
  declarations: [PagingComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    PagingComponent,
  ],
  providers: [
    UsersService,
  ]
})
export class SharedModule { }
