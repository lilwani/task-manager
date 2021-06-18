import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  selectedListId : string;

  constructor(private routes: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.routes.params.subscribe((param)=>{
      this.selectedListId = param.listId
    })
  }

  updateList(title : string){
    this.taskService.editList(this.selectedListId, title).subscribe(()=>{
      this.router.navigate(['/lists',this.selectedListId])
    })
  }

}
