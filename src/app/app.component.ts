import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-tracker';

  // The book-details component will be notify to any change in this status
  show: boolean = false;

  // Method used by children components to notify that the book-details visibility status has changed
  changeShowValue(showStatus: boolean){
    this.show = showStatus;
  }
    
}
