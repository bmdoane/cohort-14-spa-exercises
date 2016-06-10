// Using one single line of JavaScript code, complete the following tasks on the array of integers below.
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc). 
// Used - sort()
// newIntegers = [29, 25, 21, 20, 18, 13, 12, 11, 8, 7, 6, 3, 2, 1]

// Remove any integers greater than 19. 
// Used - filter()
// newIntegers = [18, 13, 12, 11, 8, 7, 6, 3, 2, 1]

// Multiply each remaining number by 1.5 and then subtract 1. 
// Used - map()
// newIntegers = [26, 18.5, 17, 15.5, 11, 9.5, 8, 3.5, 2, 0.5]

// Then output (either in the DOM or the console) the sum of all the resulting numbers.
// Used - reduce()
// newIntegers = 111.5

var newIntegers = integers.sort(function(a, b){return b-a;}).filter(function(a){return a<19;}).map(function(a){return (a*1.5)-1;}).reduce(function(a, b){return a+b});

console.log("newIntegers", newIntegers);


