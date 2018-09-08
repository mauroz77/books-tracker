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

  // Method used by children components to notify that the book-details visibility status has changed
  changeShowValue(showStatus: boolean){
    this.show = showStatus;
  }

  openNewBookDetails(): void {
    this.apiService.setCurrentBookToEdit(undefined);
    this.show = true;
    (<any>$('.ui.modal') ).modal('show');
    return;
  }
    
}
