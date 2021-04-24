import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TaskViewComponent } from "./pages/task-view/task-view.component";

const routes: Routes = [
   {path: '', redirectTo: '/lists', pathMatch: 'full' },
   {path: 'taskview', component: TaskViewComponent},
   {path: 'lists', component: TaskViewComponent},
   {path: 'lists/:listid', component: TaskViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
