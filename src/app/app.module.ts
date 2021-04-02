import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ListItemsComponent } from './pages/task-view/list-items/list-items.component';
import { TaskItemsComponent } from './pages/task-view/task-items/task-items.component';
// import { fontawesome } from "../../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js";

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
