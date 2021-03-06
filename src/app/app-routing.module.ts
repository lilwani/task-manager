import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditListComponent } from './pages/task-view/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/task-view/edit-task/edit-task.component';
import { NewTaskComponent } from './pages/task-view/new-task/new-task.component';
import { TaskItemsComponent } from './pages/task-view/task-items/task-items.component';
import { TaskViewComponent } from "./pages/task-view/task-view.component";

const routes: Routes = [
   {path: '', redirectTo: '/lists', pathMatch: 'full' },
   {path: 'taskview', component: TaskViewComponent},
   {path: 'login', component: LoginPageComponent},
   {path: 'signup', component: SignupPageComponent },
   {path: 'lists', component: TaskViewComponent},
   {path: 'edit-list/:listId', component : EditListComponent},
   {path: 'lists/:listId/newTask', component : NewTaskComponent},
   {path: 'lists/:listId/tasks/:taskId', component: TaskItemsComponent},
   {path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent},
   {path: 'lists/:listId', component: TaskViewComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
