import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import {Cell} from '../cell';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
startdate: any;
enddate: any;
total: number;
dates = [];
  constructor() { }
 //  date = [new Date(), new Date().getDate() + 1];
    date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30 ];


//  currentCell = new Cell(this.date.toLocaleDateString('en-us'));
//  currentCell = new Cell([this.date[0], this.date[1]]);
// currentCell = [new Cell(this.date[0].toLocaleString), new Cell(this.date[1].toLocaleString)];
  ngOnInit() {
    this.startdate = new Date(2018, 10, 1);
     this.enddate = new Date(2018, 10, 30);
  }
  updateTotal($event) {
    this.total = $event;
    console.log('total should be updated to ' + this.total);
  }

}
