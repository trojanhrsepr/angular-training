import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  isMouseOn = false;

  counter: number = 0;

  address = undefined;

  constructor() {
    console.log('Counter component created');
   }

  ngOnInit() {
    console.log('Counter component ngOnInit');
  }

  increment() {
    this.counter++;
    // console.trace();
  }

  myBtnClick(event: Event) {
    console.log('myBtnClick', event)
    event.stopPropagation(); // cancel bubble up to parent

    this.counter++;
   }

  myDivClick(event: Event) {
    console.log('myDivClick', event)
  }
  
}
