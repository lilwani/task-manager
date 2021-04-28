import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewTaskComponent } from './pages/task-view/new-task/new-task.component';
import { TaskViewComponent } from "./pages/task-view/task-view.component";

const routes: Routes = [
   {path: '', redirectTo: '/lists', pathMatch: 'full' },
   {path: 'taskview', component: TaskViewComponent},
   {path: 'lists', component: TaskViewComponent},
   {path: 'lists/:listId/newTask', component : NewTaskComponent},
   {path: 'lists/:listId', component: TaskViewComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
