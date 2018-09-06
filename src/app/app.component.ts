import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-tracker';
  private dates: any = {};

  onDateChange(date: Date): void {
    console.log('Date is ' + date);
  }

}
