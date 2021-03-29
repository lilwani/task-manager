import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TaskViewComponent } from "./pages/task-view/task-view.component";

const routes: Routes = [
   {path: '', component: LoginPageComponent},
   {path: 'taskview', component:TaskViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
