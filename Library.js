     //Library constructor
function Library(name) {
  this.name = name;
  this.shelves = [];
  this.allBooks = function() {//prints all books to log
    for (i = 0; i <= this.shelves.length; i++){//iterates through
      var shelvesOfBooks = this.shelves[i].books;//shelves
      for (l = 0; l <= shelvesOfBooks.length -1; l++) {//iterates
        console.log(shelvesOfBooks[l].name);//through books
      }
    }
  }
}

function Shelf(name ) {
  this.name = name;
  this.books = [];
  this.install = function(library) {//puts shelf
    library.shelves.push(this);     //in library
  }
}

function Book(name) {
  this.name = name;
  this.enshelf = function(shelf) {//adds book to
    shelf.books.push(this);//shelf
  };
  this.deshelve = function(shelf) {
    index = (shelf.books).indexOf(this);//removes
    (shelf.books).splice(index, 1);//book from shelf
  }
}


