export class Book {
    title: string;
    author: string;
    description: string;
    genre: number;
    status: number;

    constructor(title: string, author: string, genre: number, status: number, description: string) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.status = status;
        this.description = description;
    }
}