import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeLikes: number = 0;

  price : number = 99.67433;
  title: string = 'iPhone';
  today: Date = new Date(); // current date time

  formattedPrice: string;
  constructor() { }

  ngOnInit() {
  }

  incr() {
    this.price++;
  }

}
