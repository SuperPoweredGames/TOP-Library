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

    setReadStatus(newStatus) {
        this.read = newStatus;
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

function removeBookFromLibrary(index) {
    myLibrary.splice(myLibrary.indexOf(index), 1);
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

function setRead (index, status) {
    myLibrary[index].setReadStatus(status);
    console.log(myLibrary[index].read);
}

function createNewCard(book) {
    const newCard = document.createElement("div");
    newCard.id = 'card' + book;
    newCard.className = "card";

    const newBookName = document.createElement("h3");
    const newBookAuthor = document.createElement("p");
    const newBookPages = document.createElement("p");
    const readLabel = document.createElement("label");
    const newBookRead = document.createElement("input");
    newBookRead.type = "checkbox";
    newBookRead.id = 'booknum' + book;
    const newDeleteButton = document.createElement("button");

    newCard.appendChild(newBookName);
    newCard.appendChild(newBookAuthor);
    newCard.appendChild(newBookPages);
    newCard.appendChild(readLabel);
    newCard.appendChild(newBookRead);
    newCard.appendChild(newDeleteButton);

    cardContainer.appendChild(newCard);

    newBookName.innerHTML = book.title;
    newBookAuthor.innerHTML = "by " + book.author;
    newBookPages.innerHTML = "Pages: " + book.pages;
    newBookRead.checked = book.read;
    readLabel.innerHTML = "Read?";
    newDeleteButton.innerHTML = "Delete";

    newDeleteButton.addEventListener("click", () => {
        removeBookFromLibrary(book);
        updateLibrary();
    });

    newBookRead.addEventListener('change', () => {
        book.setReadStatus(newBookRead.checked);
    });
}