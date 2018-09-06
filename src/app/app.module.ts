import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookCoverComponent } from './book/book-cover/book-cover.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BooksSectionComponent } from './books-section/books-section.component';
import { BooksService } from './book/books.service';


@NgModule({
  declarations: [
    AppComponent,
    BookCoverComponent,
    BookDetailsComponent,
    BooksSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
