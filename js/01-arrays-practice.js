//STEP 1 - sreate a string array that contains your five favorite movies
//Then, use the console to display the second movie in your array.
//----------
//let movies = ["Harry Potter", "The Matrix", "Django Unchained", "The Lord of the Rings", "The Dark Knight"];
//console.log(movies[1]);


//STEP 2 - Declare an array called movies using the function constructor method. Add the length of 5 into the
//constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total 
//movies in your array. Then, use the console to display the first movie in your array.
//----------
// let movies = new Array(4);
// movies = ['Harry Potter', 'The Matrix', 'Django Unchained', 'The Lord of the Rings', 'The Dark Knight'];
// console.log(movies[0]);


//STEP 3 - Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the 
//console to display the length of the array. You should now have 6 total movies stored in the array.
//----------
// let movies = new Array(4);
// movies = ['Harry Potter', 'The Matrix', 'Django Unchained', 'Spirited Away', 'The Lord of the Rings'];
// movies.splice(2, 0, 'The Dark Knight')
// console.log(movies.length);


//STEP 4 - Declare an array called movies using literal notation. Then, assign one of your favorite movies to
//each index in the array until you have 5 total movies in your array. Now, use the delete operator to
//remove the first movie in the array. Use the console to display the contents of the array.
//----------
// let movies = ['Harry Potter', 'The Matrix', 'Django Unchained', 'Spirited Away', 'The Lord of the Rings'];
// let deletedMovie = movies.shift();
// console.log(movies);


//STEP 5 - Declare an array called movies using literal notation. Then, assign one of your favorite movies to 
//each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate 
//through the array and display each movie within the console window.
//----------
// let movies = [
//     'Harry Potter', 
//     'The Matrix', 
//     'Django Unchained', 
//     'Spirited Away', 
//     'The Lord of the Rings',
//     'Jurassic Park',
//     'The Dark Knight'
// ];
// for (let movieNames in movies) {
//     console.log(movies[movieNames]);
// }


//STEP 6 - Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each
//movie within the console window.
//----------
// let movies = [
//     'Harry Potter', 
//     'The Matrix', 
//     'Django Unchained', 
//     'Spirited Away', 
//     'The Lord of the Rings',
//     'Jurassic Park',
//     'The Dark Knight'
// ];
// for (let index of movies) {
//     console.log(index);
// }

//STEP 7 - Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie 
//within the console window in a sorted view.
//----------
// let movies = [
//     'Harry Potter', 
//     'The Matrix', 
//     'Django Unchained', 
//     'Spirited Away', 
//     'The Lord of the Rings',
//     'Jurassic Park',
//     'The Dark Knight'
// ];
// for (let index of movies) {
//     movies.sort();
//      console.log(index);
//}

//STEP 8 - Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. 
//Populate the array with the 3 movies that you regret watching. Display both arrays within the 
//console window so that it’s formatted to look like this (note the spacing, you must include that too):
// Movies I like:
// Movie 1
// Movie 2
// Movie 3
// …
// Movies I regret watching:
// Movie 1
// Movie 2
// Movie 3
// …
//----------
// let movies = [
//     'Harry Potter', 
//     'The Matrix', 
//     'Django Unchained', 
//     'Spirited Away', 
//     'The Lord of the Rings',
//     'Jurassic Park',
//     'The Dark Knight'
// ];
// console.log('Movies I like: ');
// for (let index of movies) {
//     movies.sort();
//      console.log(index);
// }

// let leastFavMovies = [
//     'Jaws', 
//     'The exorcist II', 
//     'Pirates of the Caribbean', 
// ];
// console.log('   ');
// console.log('Movies I regreat watching: ');
// for (let movieNames in leastFavMovies) {
//     console.log(leastFavMovies[movieNames]);
// }


//STEP 9 - Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a 
//single array called movies. Use the console window to display the list in reverse sorted order.
//----------
// let favMovies = [
//     'Harry Potter', 
//     'The Matrix', 
//     'Django Unchained', 
//     'Spirited Away', 
//     'The Lord of the Rings',
//     'Jurassic Park',
//     'The Dark Knight'
// ];

// let leastFavMovies = [
//     'Jaws', 
//     'The exorcist II', 
//     'Pirates of the Caribbean', 
// ];

// let movies = favMovies.concat(leastFavMovies);
// console.log(movies.reverse());  


//STEP 10 - Copy the code from step 9. Use an array 
//function to return just the last item in the array and display
//it within the console window.
//----------
// let favMovies = [
//     'Harry Potter', 
//     'The Matrix', 
//     'Django Unchained', 
//     'Spirited Away', 
//     'The Lord of the Rings',
//     'Jurassic Park',
//     'The Dark Knight'
// ];

// let leastFavMovies = [
//     'Jaws', 
//     'The exorcist II', 
//     'Pirates of the Caribbean', 
// ];

// let movies = favMovies.concat(leastFavMovies);
// movies.reverse();

// let lastItem = movies[movies.length - 1];
// console.log(lastItem);  


//STEP 11 - Copy the code from step 10. Remove the previous method and this time use a method to return just
//the first item in the array and display it within the console window.
//----------
// let favMovies = [
//     'Harry Potter', 
//     'The Matrix', 
//     'Django Unchained', 
//     'Spirited Away', 
//     'The Lord of the Rings',
//     'Jurassic Park',
//     'The Dark Knight'
// ];

// let leastFavMovies = [
//     'Jaws', 
//     'The exorcist II', 
//     'Pirates of the Caribbean', 
// ];

// let movies = favMovies.concat(leastFavMovies);
// //movies.reverse();

// let firstItem = movies[0];
// console.log(firstItem);  

//STEP 12 - Programmatically retrieve the movies in your array that you do not like and return their indices.
//----------
// let favMovies = [
//     'Harry Potter', 
//     'The Matrix', 
//     'Django Unchained', 
//     'Spirited Away', 
//     'The Lord of the Rings',
//     'Jurassic Park',
//     'The Dark Knight'
// ];
// let leastFavMovies = [
//     'Jaws', 
//     'The exorcist II', 
//     'Pirates of the Caribbean', 
// ];
// let movies = favMovies.concat(leastFavMovies);


// console.log('Movies I regreat watching: ');
// for (let movieName of leastFavMovies) {
//     let index = movies.indexOf(movieName);
//     console.log(index + ' ' + movieName);
// }

//STEP 13 - Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5.
//The array should look something like this:
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the 
//filter() method and you’ll need to filter out the names by their primitive data type.
//----------
// let favMovies = [['Harry Potter', 1 ], ['The Matrix', 2], ['Spirited Away', 3], ['Jurassic Park', 4], ['The Lord of the Rings', 5]];
// favMovies.forEach((item) => {
//         console.log(`${item[0]}`);
// });


//STEP 14 - Create a string array called employees using literal notation and populate the array with sever
//employee names. Then, create an anonymous function called showEmployee. The function should 
//accept a parameter. Call this function, passing in the employees array into the function as a 
//parameter. Make sure to display the result in the console window. Within the function, loop through
//the passed in array and display the result so that it looks exactly like this in the console window:
//Employees:
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY
//----------
// let employees = [
//         'Ann', 
//         'Peter', 
//         'Tom', 
//         'Sue', 
//         'Fred',
//         'Mary',
//         'Richard'
//     ];

// function showEmployee(employees){
//     console.log('Employees:\n');
//     employees.forEach(employee => {
//         console.log(employee);  
//     });
// }

// showEmployee(employees);


//STEP 15 - Write a JavaScript function to filter false, null, 0 and blank values from an array.
//Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//Expected Result: [58, "abcd", true]
//----------

// function filterValues(tData){
//     return tData.filter(value => {
//         if (value === '' ||  value === 0 || value === null  || value === false) {
//             return(false);
//         }
//         return(true);       
//     });
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//STEP 16 - Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10
//numbers and then pass that array into my function, the function should randomly return one of 
//those numbers.
//----------
// let items = [5, 87, 3, 11, 27, 98, 52, 33, 19, 50];

// function randomItem(items) {
//     return items[Math.floor(Math.random()*items.length)]; 
// }
// console.log(randomItem(items));

//STEP 17 - Write a JavaScript function to get the largest number from a numeric array.
//----------

let largestArray = [1,8,3,10,5];
console.log(Math.max(...largestArray));