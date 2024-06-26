class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function() {
            let haveRead = read ? 'have read' : 'have not read yet';
            return `${title} by ${author}, ${pages} pages, ${haveRead}`;
        }
    }
};

const myLibrary = [];

function addBookToLibrary() {
    
}