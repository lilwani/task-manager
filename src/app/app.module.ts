import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ListItemsComponent } from './pages/task-view/list-items/list-items.component';
import { TaskItemsComponent } from './pages/task-view/task-items/task-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    LoginPageComponent,
    ListItemsComponent,
    TaskItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
