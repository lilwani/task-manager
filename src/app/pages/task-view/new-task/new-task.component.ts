import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/modals/task.modal';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  listId ;

  constructor(private taskService:TaskService, private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe((params :Params)=>{
      this.listId = params['listId'];
    })
  }

  createNewTask(title:string){
    this.taskService.createTask(this.listId,title).subscribe((newTask : Task)=>{
    this.route.navigateByUrl(`/lists/${this.listId}`)
    })
  }

}
