import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SiblingDataService {

  public routeListId = new BehaviorSubject('Create a Task');

  constructor() { 
    console.log(this.routeListId)
  }


  emit(value: string){
    this.routeListId.next(value);
  }

  on(){
    return this.routeListId.asObservable();
  }

}
