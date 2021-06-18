import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SiblingDataService } from 'src/app/services/sibling-data.service';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  allLists: any[];
  selectedList : any
  newUserData : any

  constructor(private taskservice: TaskService, private siblingService: SiblingDataService, private routes: ActivatedRoute, private router : Router) {
    this.routes.params.subscribe((params: Params) => {
      this.selectedList = params.listId
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
      this.newUserData = data                                 // Since Angular http calls are asynchrous, when you fire the URL the processing is done in background and lines below are executed. Since you don't have anything in 'data' yet you make it synchronous by assigned it to a local variable and then using it's value below
      console.log(this.newUserData)
      this.router.navigate([`lists/${this.newUserData._id}`])
    })
  }

  deleteList(){
    this.taskservice.deleteList(this.selectedList).subscribe((list: any)=>{
      this.router.navigate(['/'])
      console.log(list)
    })         
  }

}
