import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-items',
  animations :[ 
    trigger('clickAnimation', [
      state('true', style({
        transform : 'scale(0.97)'
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

  constructor() { }

  ngOnInit(): void {
  }

  isClicked : boolean = false;
  taskCompleted : boolean = false;

  clickEffect(){
      this.isClicked = !this.isClicked
      this.taskCompleted = !this.taskCompleted
      console.log(`Task is cliked to ${this.isClicked} and completed to ${this.taskCompleted}`)
    }

}
