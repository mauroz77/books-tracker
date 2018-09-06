export class Book {
    title: string;
    author: string;
    description: string;
    genre: string;
    status: string;

    constructor(title: string, author: string, genre: string, status: string, description: string) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.status = status;
        this.description = description;
    }
}