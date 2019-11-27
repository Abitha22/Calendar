import { Component} from '@angular/core';
import {Cell} from './cell';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendar-project';
  date = new Date();
  currentCell = new Cell(this.date.toLocaleDateString('en-us'));
  // currentCell = new Cell('Abitha');
  total: number;
   updateTotal($event) {
     this.total = $event;
     console.log('total should be updated to ' + this.total);
   }
}

