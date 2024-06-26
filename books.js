const submitButton = document.getElementById('submit');
let bookName = document.getElementById('name');
let bookAuthor = document.getElementById('author');
let bookPages = document.getElementById('pages');
let bookRead = document.getElementById('read');

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

const myLibrary = [];

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(bookAuthor.value, bookAuthor.value, bookPages.value, bookRead.checked);
});

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    createNewCard();
    console.table(myLibrary);
}

function createNewCard() {

}