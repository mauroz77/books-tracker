import { Component, Input } from '@angular/core';
///////import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-tracker';
  show: boolean = false;

  changeStockValue(p) {
    console.log(p+'   Until parent This is propagatted from children. It means one of my clildren called the show componet...');
    this.show = p;
  }
    

}
