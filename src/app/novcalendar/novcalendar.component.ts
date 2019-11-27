import { Component, OnInit } from '@angular/core';
import {Calendar} from '../calendar';
import { Cell } from '../cell';
@Component({
  selector: 'app-novcalendar',
  templateUrl: './novcalendar.component.html',
  styleUrls: ['./novcalendar.component.css']
})
export class NovcalendarComponent implements OnInit {
  cells: Cell[] =  [];
currentCalendar = new Calendar(new Date('11/1/2018'), new Date('11/30/2018'), 0);

  constructor() { }

  ngOnInit() {
    const startDate = new Date(this.currentCalendar.start);
    const endDate = new Date( this.currentCalendar.end);
    while (startDate <= endDate) {
      const cell = new Cell(startDate.toLocaleDateString());
      this.cells.push(cell);
      startDate.setDate(startDate.getDate() + 1);
      console.log(startDate.toLocaleDateString());
    }
  }
add( currentValue, cell: Cell) {
  const value = (cell.value === undefined ? 0 : cell.value) + currentValue;
  return  value;
}

  get currentTotal() {
   return this.cells.reduce (this.add , 0);
  }
get startDateInString() {
  return this.currentCalendar.start.toLocaleDateString('en-us');
}
get endDateInString() {
  return this.currentCalendar.end.toLocaleDateString('en-us');
}
get total() {
 return this.currentCalendar.total;
}
updateTotal(changedCell) {
  const index = this.cells.findIndex((cell) => {
    return cell.date === changedCell.date;
  });
this.cells[index] = changedCell;
}
}
