// 1. calculateDifference
function calculateDifference(x, y) {
    return x - y;
}
console.log(calculateDifference(10, 5)); 

// 2. isOdd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(7)); 
console.log(isOdd(4)); 

// 3. findMin
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([3, 1, 5, 7, -2])); 

// 4. filterEvenNumbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 

// 5. sortArrayDescending
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
console.log(sortArrayDescending([5, 2, 9, 1, 6])); 

// 6. lowercaseFirstLetter
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello")); 

// 7. countVowels
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels("Hello World"));

// 8. findAverage
function findAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log(findAverage([5, 10, 15])); 
