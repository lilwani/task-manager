import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ListItemsComponent } from './pages/task-view/list-items/list-items.component';
import { TaskItemsComponent } from './pages/task-view/task-items/task-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NewTaskComponent } from './pages/task-view/new-task/new-task.component';
import { WebRequestInterceptorService } from './interceptors/web-request-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    LoginPageComponent,
    ListItemsComponent,
    TaskItemsComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass : WebRequestInterceptorService,  multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
