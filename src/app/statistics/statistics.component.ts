import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from './../book/book.model'
import { ApiService } from './../api.service'

declare var $: any;

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  books: Book[] = [];
  readingCounter: number = 0;
  readCounter: number = 0;
  plannedCounter: number = 0;

  @Input() showStatistics: boolean;
  @Output() showStatisticsChange = new EventEmitter();

  countsByGenre = {};
  sortedCounterByGenreKeys = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.initBooks();
  }

  ngOnChanges() {
    if (this.showStatistics)
    {
      console.log('Changed!');
      this.initBooks();
    }
  }

  public initBooks() {
    this.apiService.getBooks().subscribe((data: Array<object>) => {
      this.books = data as Book[];
      console.log('In initBooks I get this books...');
      console.dir(this.books);
      this.initStatusStatistics();
      this.countGenres();
      console.log(this.countsByGenre);
      
    });
  }

  initStatusStatistics(): void {
    this.readingCounter = this.countByStatus('Reading');
    this.readCounter = this.countByStatus('Read');
    this.plannedCounter = this.countByStatus('Planned');
  }

  private countByStatus(status: string): number {
    let count: number = 0;
    let elements = this.getBooksByStatus(status);
    return elements.length;
  }

  private getBooksByStatus(status: string): Book[] {
    return this.books.filter(book => book.status == status)
  }

  private getCountByGenre(genre: string): number {
    let booksByGenre = this.books.filter(book => book.genre === genre);
    return booksByGenre.length;
  }

  private countGenres()
  {
    this.apiService.getGenres().forEach(genre => this.countsByGenre[genre] = this.getCountByGenre(genre));
    this.sortedCounterByGenreKeys = this.getSortedKeys(this.countsByGenre);
    console.dir(this.sortedCounterByGenreKeys);
  }

 getSortedKeys(obj) {
    var keys = Object.keys(obj);
    return keys.sort(function(a,b){return obj[b]-obj[a]});
}

  closeBooksStatistics(): void {
    (<any>$('.ui.modal.statistics') ).modal('hide');
    this.showStatistics = false;
    this.showStatisticsChange.emit(this.showStatistics);
    return;
  }

}
