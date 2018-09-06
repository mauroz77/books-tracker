import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book/book.model'

@Component({
  selector: 'app-books-section',
  templateUrl: './books-section.component.html',
  styleUrls: ['./books-section.component.css']
})
export class BooksSectionComponent implements OnInit {

  @Input() sectionName: string;
  books: Book[] = [];

  constructor() { 
    let book1 = new Book('El Quijote de La Mancha', 'Miguel de Cervantes Saavedra');
    let book2 = new Book('Cien años de Soledad', 'Gabriel García Marquez');
    let book3 = new Book('Memoria de mis putas tristes', 'Gabriel García Marquez');
    let book4 = new Book('Cóndores no entierran todos los días', 'Gustavo Alvares Gardeazabal');
    let book5 = new Book('María', 'GJorge Isaacs');


    this.books.push(book1);
    this.books.push(book2);
    this.books.push(book3);
    this.books.push(book4);
    this.books.push(book5);
  }

  ngOnInit() {
  }

  getBooks()
  {
    return this.books;
  }

}
