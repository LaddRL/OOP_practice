class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = 0;
    }
}

class Shelf {
    constructor(){
        this.books = [];
        this.tchotchke = [];
    }
    addBook(book) {
        this.books.push(book)
    }
    addTchotchke(tchotchke){
        this.tchotchkes.push(tchotchke)
    }
    findBook(title){
        return this.books.find((book)=> {return book.title == book});
    }
}

const lordOfTheRings = new Book("Lord of the Rings: return of the King", "jrrTolkien", "fantasy")
lordOfTheRings.pages = 350;
const catcherInRye = new Book("Catcher in the Rye", "J.D. Salinger", "fiction")
const dune = new Book("Dune", "Frank Herbert", "Sci-Fi")

const topShelf = new Shelf();
topShelf.addBook(lordOfTheRings)
topShelf.addBook(catcherInRye)
topShelf.addBook(dune)
topShelf.findBook("Dune")
console.log(topShelf)