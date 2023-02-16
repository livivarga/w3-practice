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
    isNewerThan2000: true
  }
]

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


for (const book of favoriteBooks) {
  if (book.isNewerThan2000 !== false) {
    console.log('This book is newer than 2000: ' + book.title)
  } else {
    console.log('This book is older than 2000: ' + book.title)
  }
}

for (const book of favoriteBooks) {
  if (book.year > 2000) {
    console.log('This book is newer than 2000: ' + book.title)
  } else {
    console.log('This book is older than 2000: ' + book.title)
  }
}


/*
for (let i = 0; i < favoriteBooks.length; i++) {
  let book = favoriteBooks[i];
  console.log(book.author);
}
*/