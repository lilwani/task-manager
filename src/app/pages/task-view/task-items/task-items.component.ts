import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-items',
  animations :[ 
    trigger('clickAnimation', [
      state('clicked', style({
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('unclicked', style({
        opacity: 0.5,
        backgroundColor: 'green',
      })),
      transition('clicked <=> unclicked', [
        animate('1s ease')
      ]),
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
  clickEffect(){
      this.isClicked = !this.isClicked
  }

}
