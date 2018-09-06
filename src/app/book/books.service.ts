import { Book } from '../book/book.model'

export class BooksService {
    allTheBooks: Book[] = [];

    constructor() {
        this.loadAllTheBooks();
    }

    loadAllTheBooks() {
        let book1 = new Book(
            'El Quijote de La Mancha',
            'Miguel de Cervantes Saavedra',
            1,
            1,
            "Hola");
        let book2 = new Book(
            'Cien años de Soledad',
            'Gabriel García Marquez',
            1,
            1,
            "hola2");
        let book3 = new Book(
            'Memoria de mis putas tristes',
            'Gabriel García Marquez', 1, 2, "");
        let book4 = new Book(
            'Cóndores no entierran todos los días',
            'Gustavo Alvares Gardeazabal', 2, 1, "...");
        let book5 = new Book(
            'María',
            'Jorge Isaacs', 2, 1, "");

        this.allTheBooks.push(book1);
        this.allTheBooks.push(book2);
        this.allTheBooks.push(book3);
        this.allTheBooks.push(book4);
        this.allTheBooks.push(book5);
    }

    public getBooksByStatus(status: number): Book[] {
        return this.allTheBooks.filter(book => book.status == status)
    }

}