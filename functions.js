/* Define a function that return true if number is prime.
Otherwise, false. */

let isPrime = function(number) {

    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

/* write a function that takes in an array of numbers as args. The function
should return a new array containing the primes from the original array. */

let choosePrime = function(nums) {
    let primesArray = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (isPrime(num)) {
            primesArray = primesArray.concat(num);
        }

    }
    return primesArray;
}
console.log(choosePrime([36, 48, 9, 13, 19]));
console.log(choosePrime([5, 6, 4, 11, 2017]));


/* write a function that accepts a number as an argument. The function should return
the nearest prime number that is greater that the given number. */

let nextPrime = function(num1) {

    let i = num1;
    while (true) {
        i++;
        if (isPrime(i)) {
            return i;
        }
    }
};

console.log(nextPrime(2));
console.log(nextPrime(94));


/* write a function that accepts a number as an argument. The function should return
an array containg all of the prime numbers that can divide the given number. */

// 1. think of the division by prime number, then write the function.

let primeFactors = function(n) {
    let divPrimes = [];

    for (let i = 1; i <= n; i++) {
        if (isPrime(i) && n % i === 0) {
            divPrimes = divPrimes.concat(i);
        }
    }
    return divPrimes;
}
console.log(primeFactors(12));
console.log(primeFactors(7));
console.log(primeFactors(4087));


/* write a function that accepts a number as an argument. The method should return true if the given number
has more divisors that all positive numbers less than the given number. */

// função que conta o número de divisores do num divided.
let numFactors = function(divided) {
    let divisor = 0;

    for (let i = 1; i < divided; i++) {
        if (divided % i === 0) {
            divisor++;
        }
    }
    return divisor;
};

// função que compara se os divisores de n são maiores que o de todos os
// números anteriores a ele e retorna true or false.
let isAntiPrime = function(n) {
    let factorsOfN = numFactors(n);

    for (let i = 1; i < n; i++) {
        if (factorsOfN <= numFactors(i)) {
            return false;
        }
    }
    return true;
};

console.log(isAntiPrime(24));
console.log(isAntiPrime(27)); // false


/* write a function that takes in a sentence string and returns the word
of the sentence that contain most vowels. */

//1. escrever uma função que conta as vogais.
/*
let countVowels = function(sentence) {
    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
        sentence = sentence[i];
        if(sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u") {
            count++;
        }
    }
    return count;
};

let mostVowels = function(phrase) {

    for(let i = 0; i < phrase.length; i++) {

    }

}

*/

/* write a function that takes in an array of numbers. The function should return the element of the array
that it equal to half of the sum of all elements of the array. If there is no such element, the method should return null. */

// create a function that calculates the sum.

let sumOfElements = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let elements = arr[i];
        sum += elements;
    }
    return sum / 2.0;
}

// create a function that find the array.

let allElseEqual = function(numero) {
    let soma = sumOfElements(numero);
    for (let i = 0; i < numero.length; i++) {
        if (soma === numero[i]) {
            return numero[i];
        }
    }
    return null;
}
console.log(allElseEqual([6, 3, 5, -9, 1]));
console.log(allElseEqual([1, 2, 3, 4]));