import { Book } from '../book/book.model'

export class BooksService {
    allTheBooks: Book[] = [];
    currentBookToEdit: Book;

    constructor() {
        this.loadAllTheBooks();
    }

    loadAllTheBooks() {
        let book1 = new Book(
            'El Quijote de La Mancha',
            'Miguel de Cervantes Saavedra',
            "Fantasy",
            "Reading",
            "Hola");
        let book2 = new Book(
            'Cien años de Soledad',
            'Gabriel García Marquez',
            "Fiction",
            "Reading",
            "hola2");
        let book3 = new Book(
            'Memoria de mis putas tristes',
            'Gabriel García Marquez', "Science fiction",
            "Read", "");
        let book4 = new Book(
            'Cóndores no entierran todos los días',
            'Gustavo Alvares Gardeazabal', "Action and Adventure",
            "Reading", "...");
        let book5 = new Book(
            'María',
            'Jorge Isaacs', "Mystery",
            "Reading", "");

        this.allTheBooks.push(book1);
        this.allTheBooks.push(book2);
        this.allTheBooks.push(book3);
        this.allTheBooks.push(book4);
        this.allTheBooks.push(book5);
    }

    public getBooksByStatus(status: string): Book[] {
        return this.allTheBooks.filter(book => book.status == status)
    }

    public findBook(name: string): Book{
        let x = this.allTheBooks.filter(book => book.title === name);
        if (x.length > 0)
        {
            return x[0];
        }
        else{
            return null;
        }
    }

    public addNewBook(newBook: Book):void {
        this.allTheBooks.push(newBook);
    }

    public setCurrentBookToEdit(currentBook):void{
        this.currentBookToEdit = currentBook;
    }

    public getCurrentBookToEdit():Book{
        return this.currentBookToEdit;
    }

}