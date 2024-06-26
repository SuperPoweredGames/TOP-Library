const submitButton = document.getElementById('submit');
const bookName = document.getElementById('name');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');

const cardContainer = document.getElementsByClassName('container')[0];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

let myLibrary = [];

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary(bookName.value, bookAuthor.value, bookPages.value, bookRead.checked);
});

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    updateLibrary();
}

function updateLibrary(){
    //Remove all cards
    while(cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.lastChild);
    }

    //Create new cards
    myLibrary.forEach(book => {
        createNewCard(book);
    });
}

function createNewCard(bookNumber) {
    const newCard = document.createElement("div");
    newCard.className = "card";

    const newBookName = document.createElement("h3");
    const newBookAuthor = document.createElement("p");
    const newBookPages = document.createElement("p");
    const readLabel = document.createElement("label");
    const newBookRead = document.createElement("input");
    newBookRead.type = "checkbox";
    newBookRead.id = 'booknum' + bookNumber;

    newCard.appendChild(newBookName);
    newCard.appendChild(newBookAuthor);
    newCard.appendChild(newBookPages);
    newCard.appendChild(readLabel);
    newCard.appendChild(newBookRead);

    cardContainer.appendChild(newCard);

    newBookName.innerHTML = bookNumber.title;
    newBookAuthor.innerHTML = bookNumber.author
    newBookPages.innerHTML = bookNumber.pages
    newBookRead.checked = bookNumber.read;
    readLabel.innerHTML = "Read Status?"
    newBookRead.disabled = true;
}