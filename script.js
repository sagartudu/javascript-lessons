// const data = [
//     {
//         id:1,
//         isbn: "9781593279509",
//         title: "Eloquent JavaScript, Third Edition",
//         subtitle: "A Modern Introduction to Programming",
//         author: "Marijn Haverbeke",
//         published: "2018-12-04T00:00:00.000Z",
//         publisher: "No Starch Press",
//         pages: 472,
//         description: "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
//         website: "http://eloquentjavascript.net/",
//         genres:[
//             "education",
//             "knowledge",
//             "Informative",
//             "technology",
//             "Computer Science"
//         ]
//     },
//     {
//         id:2,
//         isbn: "9781491943533",
//         title: "Practical Modern JavaScript",
//         subtitle: "Dive into ES6 and the Future of JavaScript",
//         author: "Nicolás Bevacqua",
//         published: "2017-07-16T00:00:00.000Z",
//         publisher: "O'Reilly Media",
//         pages: 334,
//         description: "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
//         website: "https://github.com/mjavascript/practical-modern-javascript",
//         genres:[
//             "education",
//             "knowledge",
//             "Informative",
//             "technology",
//             "Computer Science"
//         ]
//     },
//     {
//         id:3,
//         isbn: "9781593277574",
//         title: "Understanding ECMAScript 6",
//         subtitle: "The Definitive Guide for JavaScript Developers",
//         author: "Nicholas C. Zakas",
//         published: "2016-09-03T00:00:00.000Z",
//         publisher: "No Starch Press",
//         pages: 352,
//         description: "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
//         website: "https://leanpub.com/understandinges6/read",
//         genres:[
//             "education",
//             "knowledge",
//             "Informative",
//             "technology",
//             "Computer Science"
//         ]
//     },
//     {
//         id:4,
//         isbn: "9781449365035",
//         title: "Speaking JavaScript",
//         subtitle: "An In-Depth Guide for Programmers",
//         author: "Axel Rauschmayer",
//         published: "2014-04-08T00:00:00.000Z",
//         publisher: "O'Reilly Media",
//         pages: 460,
//         description: "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
//         website: "http://speakingjs.com/",
//         genres:[
//             "education",
//             "knowledge",
//             "Informative",
//             "technology",
//             "Computer Science"
//         ]
//     },
//     {
//         id:5,
//         isbn: "9781449331818",
//         title: "Learning JavaScript Design Patterns",
//         subtitle: "A JavaScript and jQuery Developer's Guide",
//         author: "Addy Osmani",
//         published: "2012-08-30T00:00:00.000Z",
//         publisher: "O'Reilly Media",
//         pages: 254,
//         description: "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
//         website: "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
//         genres:[
//             "education",
//             "knowledge",
//             "Informative",
//             "technology",
//             "Computer Science"
//         ]
//     },
//     {
//         id:6,
//         isbn: "9798602477429",
//         title: "You Don't Know JS Yet",
//         subtitle: "Get Started",
//         author: "Kyle Simpson",
//         published: "2020-01-28T00:00:00.000Z",
//         publisher: "Independently published",
//         pages: 143,
//         description: "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
//         website: "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
//         genres:[
//             "education",
//             "knowledge",
//             "Informative",
//             "technology",
//             "Computer Science"
//         ]
//     },
//     { 
//         id:7,
//         isbn: "9781484200766",
//         title: "Pro Git",
//         subtitle: "Everything you neeed to know about Git",
//         author: "Scott Chacon and Ben Straub",
//         published: "2014-11-18T00:00:00.000Z",
//         publisher: "Apress; 2nd edition",
//         pages: 458,
//         description: "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
//         website: "https://git-scm.com/book/en/v2",
//         genres:[
//             "education",
//             "knowledge",
//             "Informative",
//             "technology",
//             "Computer Science"
//         ]
//     },
//     {
//         id:8,
//         isbn: "9781484242216",
//         title: "Rethinking Productivity in Software Engineering",
//         subtitle: "",
//         author: "Caitlin Sadowski, Thomas Zimmermann",
//         published: "2019-05-11T00:00:00.000Z",
//         publisher: "Apress",
//         pages: 310,
//         description: "Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 \"Dagstuhl\" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
//         website: "https://doi.org/10.1007/978-1-4842-4221-6",
//         genres:[
//             "education",
//             "knowledge",
//             "Informative",
//             "technology",
//             "Computer Science"
//         ]
//     }
// ]

//   function getBooks(){
//     return data;
//   }

//   function getBookById(id){
//     return data.find((item)=> item.id === id)
//   }

//   //Getting the book object with the help of the id
//   const book = getBookById(2);

//   /*********************OBJECT DESTRUCTURING and REST & SPREAD OPERATOR ****************/
//   //Here in this object destructuring we destructure the values based on their existence in the object(names)
//   const {title, author, isbn, published, publisher, genres, ...restValues} = book;
//   console.log(title, author, isbn, published, publisher, genres, restValues)

//   //In case of array destructuring the value will be assigned based on the index position irrespective of the names whatever it may be. 
//   const [primaryGenre, secondaryGenre, ...otherValues] = genres;
//   console.log(primaryGenre, secondaryGenre, otherValues);

//   //Creating a new genre array and adding more genres into it by using the spread(...) operator which will spread the values of the previos array and put them into the new array along with the further new values if there is any.
//   const newGenres = [...genres, "Romance", "Horror", "Thriller"];
//   console.log(newGenres);

//   //creating an new object with the previos object and adding some new properties on top of it.
//   const newBook = {...book, type: "Hard Cover", pages: 200, noOfAwards: 0};
//   console.log(newBook);
//   //Here in the above example the pages key's value is been overridden by the new value as we change the value by again ading the same 'pages' property with a new value after doing the spread operation


//   /****************************************TEMPLATE LITERALS***************************************/
//   //Template literals are the type of string representation where we can represent any javascript variables/expression inside a string.
//   //It is denoted by ``(backticks).
  
//   const myBook = `The author of ${title} is ${author}`;
//   console.log(myBook);

//   /***************************************TERNARY OPERATOR****************************************/
//   //Ternary operator is used incase of the conditional execution of the statements or set of statements 
//   // (condition)? expression1 : expression2

// const pageRange = parseInt(newBook.pages) > 100 ? "Over a hundred" : "less than a hundred" ;
// console.log(pageRange);

// /*****************************************ARROW FUNCTIONS*****************************************/
// //Arrow functions are compact way of defining a function which has its own semantics alternative to the traditional method defining the functions.
// //Traditional way of defining a function
// function getYear(published){
//     return published.split('-')[0];
// }

// const yearOfPublication = getYear(published);
// console.log(yearOfPublication)

// //Defining the same above function with the help of arrow function
// const getYearArrow = (published)=>(published.split('-')[0]);

// const yearOfPublication1 = getYearArrow(published);
// console.log(yearOfPublication1)

// /*************************SHORT-CUTTING AND LOGICAL OPERATOR(&&, ||, ??***********************************/
// //Short-cutting and logical operator can be used to conditionally execute the expression based on value of a variable.
// //These operators can be used to render or the execute the statement based on truthy and falsey values.

// console.log(true && "This will get execute");
// console.log(false && "The result of this expression is false");

// //Let's try this out with any truthy value;
// console.log(yearOfPublication && 2017);
// console.log(yearOfPublication || 2017);
// //falsy value are false, 0(zero), undefined, null and NaN 
// console.log(yearOfPublication.time && '20:14');

// //The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// //This is wrong
// console.log(newBook.noOfAwards || "no data");

// // This is right
// console.log(newBook.noOfAwards ?? "no data");

// /****************************OPTIONAL CHAINING *******************************/
// //Optional Chaining is the method of wrirting an expression where we try to fetch a value from a particular object or array which can be undefined and hence can be used to neglect a particular undefined property reading error.
// const newBook1 = {...newBook, reviews: {critics: 546, readOmeter: 1002, bookStar: 4321 }};
// const newBook2 = {...newBook, edition: "2nd Edition",  reviews: {critics: 243,  peopleChoice: 780, bookStar: 2312 }};

// const getReviewsSum = (book) => {
//     const criticsReview = book?.reviews?.critics ?? 0;
//     const readOmeterReview = book?.reviews?.readOmeter ?? 0;
//     const bookStarReview = book?.reviews?.bookStar ?? 0;

//     return criticsReview + readOmeterReview +bookStarReview;

// }

// const newBook1Reviews = getReviewsSum(newBook1);
// console.log(newBook1Reviews);
// const newBook2Reviews = getReviewsSum(newBook2);
// console.log(newBook2Reviews);


// /****************************************ARRAY METHODS*********************************************/
// //The Map() Method
// /*The Map method is an array method/function which will iterate over an array and return a new array with the same length of
// the parent array. This method will iterate over each and every element of the parent array and will execute a callback functions and 
// perform some specific operation and will return (generate) a new array having the same length

// NOTE: map(), forEach(), filter(), reduce() are all array methods which will iterate of an array but the differnce will be the 
// return values

// SYNTAX:-

// const newArray = array.map(Callback(element, index, array) thisArgs);
// */
// const array = [1, 2, 3, 4, 5];
// const newArray = array.map((ele) => ele * 2);
// console.log(newArray)

// //Let's retun the tile of each and every book from the data array

// const bookTitles = data.map((book) => book.title);
// console.log(bookTitles);

// const titlesAndAuthors = data.map((book) =>
//     //Declaration Block
//     {
//         return {
//             title: book?.title,
//             author: book?.author
//         }
//     }
// );

// console.log(titlesAndAuthors);

// //filter() Method: 
// /*  filter() method is also an iteration method which will iterate over each and every element of an array and will return a new array containing the 
//     elements which will satisfy the creteria or condition defined inside the callback function.

//     SYNTAX:-
    
//     Array.filter(function callback(element, index, array) this.Arg);
// */ 

// //Exmaple 1
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// //Example 2
// const points = [3.18, 3.25, 3.33, 3.47, 3.68, 3.72, 3.81, 3.94];
// const newPoints = points.filter((point)=>{
//     if(point > 3.50){
//         return point
//     }
// });

// console.log(newPoints);

// //Getting the longBooks and has been published after the year 2016
// const longBooks = data.filter((book) => book?.pages > 300 ).filter((book) => Number(book?.published?.split('-')[0]) > 2016)
// console.log(longBooks);

// const javaScriptBooks = data.filter((book) => book?.title?.includes('JavaScript')).map((book) => book?.title)
// console.log(javaScriptBooks);

// //REDUCER METHOD

// /*The reducer method is also an array function which will iterate over each and every element of the parent array
// and reduce the array into a single value which will be returned as a result of the reduce function.'
// The Reducer return type can be decided/declared.
// For each elemet the reducer function will get called and the value will be returned after each execution which will be stored in the accumulator.
// After completeion of the whole operation the accumulator value will be returned as the result of thye reduce method on top of the parent array itself. */

// //SYNTAX:-

// /*Array.reduce(function reducer(accumulator, currentValue, index, array) initialValue);

// In case of the absence of the initial value the accumulator will consider the first element of the parent as the initial value and will be assigned to the 
// accumulator itself and the reducer function wont be called for the zeroth (0th) indexi.e it will be skipped for the first iteration. However, if you dont provide any 
// initial value it will be throw a TypeError. To solve that type error we better should provide an initialValue as 0
// or an '' (empty string) for a concatenation.
// */

// //Exmaple

// const pageSums = data.reduce((result, book)=>{
//     console.log(result)
//     return result + book?.pages;
// }, '');

// console.log(`Total pages are : ${pageSums}`);


// //SORT METHOD
// /* Array sort() method is used to sort the array elements into either ascending or descending way

// SYNTAX: 

// Array.sort(function callback(a, b)=> a - b); for ascending
// Array.sort(function callback(a, b)=> a - b); for descending

// NOTE:- Array.slice().sort((function callback(a, b)=> a - b);
// Here, slice can help us sort the array without mutating the original array as the slice will return a copy of the original array

// */

// const numberArray = [2, 4, 5, 9, 1, 0, 3, 11, 7, 6];
// const sortedAscArray = numberArray.slice().sort((a, b)=> a - b);
// const sortedDscArray = numberArray.slice().sort((a, b)=> b - a);
// console.log(sortedDscArray, sortedAscArray );

// //Get sorted array of books based on the page size.

// const sortedBooks = data.slice().sort((book1,book2) => (book2?.pages - book1?.pages)).map((book)=>{ return {title: book?.title, pages: book?.pages}});
// console.log(`Sorted Books: ${JSON.stringify(sortedBooks)}`);


// /**************************************************WORKING WITH IMMUTABLE ARRAYS ***************************************/

// //Creating a new book element in the array

// const newBookObj = {
//     id:9,
//     isbn: "97816757509",
//     title: "A Game of Thrones",
//     subtitle: "A song of ice and fire",
//     author: "George R. R. Martin",
//     published: "1996-08-01T00:00:00.000Z",
//     publisher: "HarperCollins Publishers",
//     pages: 472,
//     description: "A Game of Thrones is a fantasy book by George R.R. Martin that tells the story of a struggle for power between noble families in the fictional continents of Westeros and Essos",
//     website: "https://georgerrmartin.com/",
//     genres:[
//         "Fantasy",
//         "Adventure",
//         "Thriller",
//         "Comedy",
//         "Fictional"
//     ]
// };

// const newBookData = [...data, newBookObj];
// console.log(newBookData);

// //Delete a book from the data array

// const bookDataAfterDelete = newBookData.filter((book) => book?.id !== 3);
// console.log(bookDataAfterDelete);

// // Update the book element in the book data array of object

// const updatedBookData = bookDataAfterDelete.map((book)=>{
// if(book?.id > 2){
//     book.id = book.id - 1;
//     return book; 
// }
// else{
//     return book;
// }
// });

// console.log(updatedBookData);


// /*********************************************ASYNCHRONOUS JAVASCRIPT : PROMISES *******************************************************/

// fetch('https://api.escuelajs.co/api/v1/products')
// .then(data =>  data.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));

//Create a function to fetch the api data with the help of async/await

async function getApiData(){
    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await res.json();
    console.log(data)
    return  data;
}

 const apiData = getApiData();
 console.log('apiData', apiData);
