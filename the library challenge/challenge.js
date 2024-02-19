import books from "./books.json" assert {type: 'json'};



function priceOfBook(bookName) {
  let priceBook = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].title == bookName) {
      priceBook = books[i].price
    }
  }
  return priceBook;
}

function affordableBooks(budget) {

  let booksWithYourBudget = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].price == budget) {
      booksWithYourBudget.push(books[i].title)
    }
  }
  return booksWithYourBudget;
}


function findBookByGenre(genre) {

  let booksByGenre = [];
  let find = false;
  let i = 0;
  while (i < books.length) {
    for (let j = 0; j < books[i].genres.length; j++) {
      if (books[i].genres[j] == genre) {
        find = true;
        booksByGenre.push(books[i].title);

      }
    }

    i++
  }
  return booksByGenre
}

function groupByGenre() {
  // write your code here
}

function sortBooksByPrice() {
  let min = books[0].price;
  let sortedArr = [];

  for (let i = 0; i < books.length; i++) {
    console.log(books[i].price);
    if (books[i].price < min) {
      min = books[i].price;
      sortedArr.unshift(min)
    }
  }
  console.log(sortedArr);
  console.log(min)
}



let tst = [5,50,2,10,100,77,0]
const test = () => {
  let min = tst[0]
  let arr = [];
  for (let i = 0; i <= tst.length; i++) {
    
    if (tst[i] < min) {
      min = tst[i]
      arr.unshift(tst[i])
    }
    else {
      if (arr.length == 0) {
        arr.push(tst[i])
      }
      console.log(arr)
      if (tst[i] > arr[arr.length - 1]) {
        arr.push( tst[i])
      }
      if(tst[i] < arr[arr.length - 1]){
        let lastItem = arr[arr.length - 1]
        arr.pop()
        arr.push(tst[i])
        arr.push(lastItem)
      }
    }
  }
  console.log('**************');
  console.log(arr);
}
test()

