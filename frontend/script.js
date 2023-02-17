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

/*

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
*/

// The dating site algorithm

// const person1 = 'Cyclops';
// const person2 = 'Princess Diana';
// const numOfEyesOfFirst = 1;
// const numOfEyesOfSecond = 2;

const person1 = 'Frodo Baggins';
const person2 = 'Shelob the spider';
const numOfEyesOfFirst = 2;
const numOfEyesOfSecond = 8;

// const person1 = 'Rowan Atkinson';
// const person2 = 'Beyoncé';
// const numOfEyesOfFirst = 2;
// const numOfEyesOfSecond = 2;

// const person1 = 'BatMan';
// const person2 = 'CatWoman';
// const numOfEyesOfFirst = 2;
// const numOfEyesOfSecond = 2;

let joinedNames = person1 + person2 // It is your task to change '?' to valid code
joinedNames = joinedNames.split(' ').join('');
const lengthOfJoinedNames = joinedNames.length; // change '?' to valid code
const joinedNamesHasEvenCharacters = lengthOfJoinedNames % 2 === 0; // it should be an expressions which gives true or false

const diffOfNumOfEyesIsLow = Math.abs(numOfEyesOfFirst - numOfEyesOfSecond) <= 5; // it should be true or false. Hint: Math.abs(x) can be used, but there are other solutions too

const mostLovedOnes = ['Princess Diana', 'David Attenborough', 'Rowan Atkinson', 'David Beckham'];
const person1IsPerfectToAnyone = mostLovedOnes.includes(person1); // it should be true or false. Hint: you have learnt about a function which checks if an array includes an element
const person2IsPerfectToAnyone = mostLovedOnes.includes(person2); // it should be true or false

if (joinedNamesHasEvenCharacters && diffOfNumOfEyesIsLow || person1IsPerfectToAnyone || person2IsPerfectToAnyone) { // final challenge: please code THE condition
  console.log('❤️');
} else {
  console.log("😢");
}
