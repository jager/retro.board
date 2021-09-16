import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './authorized/main/main.component';
import { LoginComponent } from './unauthorized/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
