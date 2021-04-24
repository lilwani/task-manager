import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SiblingDataService } from 'src/app/services/sibling-data.service';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  allLists: any[];

  constructor(private taskservice: TaskService, private siblingService: SiblingDataService, private routes: ActivatedRoute) {
    this.routes.params.subscribe((params: Params) => {
      this.siblingService.emit(params.listId)         // param.listId because the path in routing module has this name in the path 
    })
  }

  ngOnInit(): void {

    //Get the lists from Database - Invoke GET : /lists
    this.taskservice.getLists().subscribe((lists: any[]) => {
      this.allLists = lists;
    })

  }

  //Create a new list - Invoke POST : /lists
  createNewList(title: string) {
    this.taskservice.createList(title).subscribe((data) => {
      console.log(data)
    })
  }


}
