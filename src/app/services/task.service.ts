import { Injectable } from '@angular/core';
import { Task } from '../modals/task.modal';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webrequest : WebRequestService) { }

  //Leverages web request service which collaborates with node and in turn mongo to perform operations

  createList(title : string){
    return this.webrequest.post('lists',{ title })
  }

  getLists(){
    return this.webrequest.get('lists')
  }

  getTasks(listId : string){
    return this.webrequest.get(`lists/${listId}/tasks`)
  }

  createTask(listId :string,title :string){
    return this.webrequest.post(`lists/${listId}/tasks`,{ title })
  }

  completedTask(task : Task){
    return this.webrequest.patch(`lists/${task._listID}/tasks/${task._id}`, {
      completed : !task.completed
    })
  }

}
