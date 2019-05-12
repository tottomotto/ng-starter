import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' },
  { path: 'users/:userId', component: UserDetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
