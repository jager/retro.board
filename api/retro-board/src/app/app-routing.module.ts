import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BoardComponent } from './board/board/board.component';
import { AuthGuardService as AuthGuard } from './admin/services/auth-guard.service';
import { UsersComponent } from './admin/users/users.component';



const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: "users", component: UsersComponent, canActivate: [AuthGuard]}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'board/:boardId', component: BoardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
