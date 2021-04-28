import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { SiblingDataService } from "src/app/services/sibling-data.service";

@Component({
  selector: 'app-task-items',
  animations: [
    trigger('clickAnimation', [
      state('true', style({
        transform: 'scale(0.97)'
      })),
      state('false', style({
        transform: 'scale(1.0)'
      })),
      transition('true <=> false', animate('10ms'))
    ]),
  ],
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {

  allTasks: any[] 

  constructor(private taskService: TaskService, private siblingService: SiblingDataService) {
  }

  // Using BehaviourSubject to fetch the list id from route params on label click and send the data across components 
  ngOnInit(): void {
    this.siblingService.on().subscribe((listId)=>{
      this.taskService.getTasks(listId).subscribe((tasks: any[]) => {
        this.allTasks = tasks
      })
    })
  }


  isClicked: boolean = false;
  taskCompleted: boolean = false;

  clickEffect() {
    this.isClicked = !this.isClicked
    this.taskCompleted = !this.taskCompleted
    console.log(`Task is cliked to ${this.isClicked} and completed to ${this.taskCompleted}`)
  }

}
