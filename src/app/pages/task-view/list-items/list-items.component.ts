import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  allLists : any[];

  constructor(private taskservice : TaskService) { }

  ngOnInit(): void {
    //Get the lists from Database - Invoke GET : /lists
      this.taskservice.getLists().subscribe((lists:any[]) => {
      this.allLists = lists;
    } )
  
  }

  //Create a new list - Invoke POST : /lists
  createNewList(title:string){
    this.taskservice.createList(title).subscribe((data)=>{
      console.log(data)
    })
  }


}
