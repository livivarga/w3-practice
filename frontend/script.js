/*
let favoriteBooks = [
  {
    title: "Öreg néne őzikéje",
    author: "Fazekas Anna",
    year: 1952,
    isNewerThan2000: false,
  },
  {
    title: "Szamárfül",
    author: "Romhányi József",
    year: 2003,
    isNewerThan2000: true,
  }
]

let data = {
  myFavorireBooks: favoriteBooks,
  isNewerThan: function(year, condition) {
    return year >= condition
  }
}
*/
/*
for (const book of favoriteBooks) {
  console.log(book.title)
}

for (let i = 0; i < favoriteBooks.length; i++) {
  console.log(favoriteBooks[i].author)
}
*/

/*
if (favoriteBooks[0].isNewerThan2000 === true) {
  console.log(favoriteBooks[0].title);
  console.log(favoriteBooks[0].title + ' is newer than 2000');
} else {
  console.log('This book  is older than 2000: ' + favoriteBooks[0].title);
}

if (favoriteBooks[1].isNewerThan2000 === true) {
  console.log(favoriteBooks[1].title);
  console.log('This book is newer than 2000: ' + favoriteBooks[1].title);
} else {
  console.log(favoriteBooks[1].title + ' is older than 2000');
}
*/

/*
for (const book of favoriteBooks) { 
  if (book.isNewerThan !== false) {
    console.log('This book is newer than 2000: ' + book.title)
  } else {
    console.log('This book is older than 2000: ' + book.title)
  }
}

for (const book of favoriteBooks) {
  const bookTitle = book.title;
  if (!data.isNewerThan(book.year, 2000)) {
    console.log('This book is older than 2000: ' + bookTitle)
  } else {
    console.log('This book is newer than 2000: ' + bookTitle)
  }
}
*/



// JS Travel excercise

// TODO: define addFavoritePlace(..) function

// TODO: define printFavoritePlaces() function

let favoritePlaces = []

let availablePlaces = ["Galápagos Islands", "Great Pyramid of Giza", "Eiffel Tower", "Great Wall of China", "Trans Bhutan Trail", "Colosseum of Rome", "Great Smoky Mountains National Park" ]

function addFavoritePlace(placeName) {
    if(!placeName.includes("Great")) {
        favoritePlaces.push(placeName)
    }
}

function printFavoritePlaces() {
    // console.log('Favorite places ' + favoritePlaces.length)
    console.log(`Favorite place ${favoritePlaces.length}`)
    for (place of favoritePlaces) {
        console.log(place)
    }
}

function planMyTrips () {
    //do the selection
    for (const place of availablePlaces) {
        addFavoritePlace(place)
    }
    //print the list
    printFavoritePlaces()
}

planMyTrips()
