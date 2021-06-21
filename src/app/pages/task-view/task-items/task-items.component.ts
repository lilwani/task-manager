import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { SiblingDataService } from "src/app/services/sibling-data.service";
import { Task } from 'src/app/modals/task.modal';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {

  allTasks: Task[] 
  listId : string
  constructor(private taskService: TaskService, private siblingService: SiblingDataService) {
  }

  // Using BehaviourSubject to fetch the list id from route params on label click and send the data across components 
  ngOnInit(): void {
    this.siblingService.on().subscribe((listId)=>{
      this.listId = listId;
      if(this.listId){
        this.taskService.getTasks(this.listId).subscribe((tasks: Task[]) => {
          this.allTasks = tasks
        })
      }
    })
  }

  updateTaskToCompleted(task : Task){
    this.taskService.completedTask(task).subscribe(()=>{
      //toggle complete class for strike-through effect
      task.completed = !task.completed
    })
  }


  deleteTask(task : string){
    this.taskService.deleteTask(this.listId, task).subscribe((res: any)=>{
      this.allTasks = this.allTasks.filter(val => val._id !== task)
      console.log(res)
    })
  }


}



