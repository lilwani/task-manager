import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  selectedListId : string 
  selectedTaskId : string

  constructor(private routes: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.routes.params.subscribe((param)=>{
      this.selectedListId = param.listId
      this.selectedTaskId = param.taskId
    })
  }

  updateTask(title : string){
    this.taskService.editTask(this.selectedListId, this.selectedTaskId, title).subscribe(()=>{
      this.router.navigate(['/lists',this.selectedListId])
    })
  }
}
