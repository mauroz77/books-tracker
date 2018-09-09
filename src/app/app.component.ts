import { Component, Input } from '@angular/core';

import { BooksService } from './book/books.service';
import { ApiService } from  '../app/api.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-tracker';

  constructor(private booksManager: BooksService, private  apiService:  ApiService) {
  }

  // The book-details component will be notify to any change in this status
  show: boolean = false;

  // Indicates to the statistics component that its status has changed so it can reload its data.
  // Maybe there is an easier way to do this, so this can improved later (an observer pattern maybe?).
  showStatistics: boolean = false;

  // Method used by children components to notify that the book-details visibility status has changed
  changeShowValue(showStatus: boolean){
    this.show = showStatus;
  }

  openNewBookDetails(): void {
    this.apiService.setCurrentBookToEdit(undefined);
    this.show = true;
    (<any>$('.ui.modal.modal_details') ).modal('show');
    return;
  }

  openNewStatistics(): void {
    console.log('showStatistics was '+this.showStatistics);
    this.showStatistics = true;
    console.log('I change it to '+this.showStatistics);
    (<any>$('.ui.modal.statistics') ).modal('show');
    return;
  }
    
}
