function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return `${this.title}, ${this.author}, ${this.pages} pages, ${this.read}`
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'have not');
console.log(theHobbit.info());






















// const myObject = {
//     property: 'String!',
//     property2: 77,
//     "property three": function(){

//     }
// }

// function Book(title, author) {
//     this.title = title;
//     this.author = author;
// }

// const fakeBook = new Book('The Great Gatsby', 'John F. Kennedy');
// console.log(fakeBook.title);

// Book.prototype.sayName = function() {
//     console.log(this.name);
// }

// function fictionBook(title) {
//     this.title = title;
//     this.author = 'Stephen King';
// }

// fictionBook.prototype = Object.create(Book.prototype)

// const book = new fictionBook('The Fog');
// book.sayName();
// book.author;