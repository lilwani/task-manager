import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { SiblingDataService } from "src/app/services/sibling-data.service";
import { Task } from 'src/app/modals/task.modal';

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

  allTasks: Task 
  listId : string

  constructor(private taskService: TaskService, private siblingService: SiblingDataService) {
  }

  // Using BehaviourSubject to fetch the list id from route params on label click and send the data across components 
  ngOnInit(): void {
    this.siblingService.on().subscribe((listId)=>{
      this.listId = listId;
      this.taskService.getTasks(this.listId).subscribe((tasks: Task) => {
        this.allTasks = tasks
      })
    })
  }

  updateTaskToCompleted(task : Task){
    this.taskService.completedTask(task).subscribe(()=>{
      console.log("This Task update is completed ")
      //toggle complete class for strike-through effect
      task.completed = !task.completed
    })
  }

}
