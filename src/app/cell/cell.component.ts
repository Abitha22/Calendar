import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../cell';
import { IfStmt } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
hour: any;
  @Input()

  myCell: Cell;

  @Output()
  valueUpdated: EventEmitter<Cell> = new EventEmitter<Cell>();
  showDate = true;


  constructor() { }

  ngOnInit() {
    console.log(this.myCell);
  }
  get value() {
    if (this.showDate) {
      return this.myCell.date;

    }
    return this.myCell.value === undefined ? 0 : this.myCell.value;

  }
  showValue() {
    console.log('working');
    this.showDate = false;
  }
  hideValue() {
    console.log('working');
    this.showDate = true;
  }
  updateValue() {
    console.log('blur working');
    console.log(this.myCell.value);
    if (this.myCell.value === undefined) {
      this.myCell.value = 0;
    }
    this.myCell.value = +this.myCell.value;
    this.valueUpdated.emit(this.myCell);
    //  console.log(this.myCell.value);
  }
// validation(hour) {
// this.hour = hour;
// if (this.hour >= 8) {
//   document.getElementById('day').style.backgroundColor = 'red';
//  } else if (this.hour >= 7 && this.hour < 8) {
//   document.getElementById('day').style.backgroundColor = 'blue';
//  } else if (this.hour < 7 && this.hour > 0) {
//   document.getElementById('day').style.backgroundColor = 'grey';
//  } else {
//   document.getElementById('day').style.backgroundColor = 'white';
//  }
// }
}
