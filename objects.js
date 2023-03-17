const myObject = {
    property: 'String!',
    property2: 77,
    "property three": function(){

    }
}

function Book(title, author) {
    this.title = title;
    this.author = author;
}

const fakeBook = new Book('The Great Gatsby', 'John F. Kennedy');
console.log(fakeBook.title);