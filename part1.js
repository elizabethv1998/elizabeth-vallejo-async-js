//Asynchronous Javascript Part 1
/*Asynchronous Javascript is a type of programming that allows a program to begin a lengthy task while being able to respond to other event during the same time. 
Examples of functions where Asynchronous Java could be very useful are fetch()- Making HTTP requests, getUserMedia()- Accessing a user's camera or microphone, & showOpenFilePicker()- Asking the user to select files. These functions would take time to load. */


//- Here is an example of synchronous java:
/*const MyName = "Elizabeth";
const MyGreeting = `Hello, my name is ${name}!`;
console.log(MyGreeting);*/

// My output results were: 
//> console.log(greeting);
//Hello, my name is Elizabeth!
 

// Here is another example of synchronous java with separated functions :
/*function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Elizabeth";
const greeting = makeGreeting(name);
console.log(greeting);*/

//My output results still were: 
//> console.log(greeting);
//Hello, my name is Elizabeth!

// Here is an example of how long your computer take when loading a synchronous-coded website
/*const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `Finished generating ${quota.value} numbers, this is the speed of your computer when loading synchronous-based applications!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
}); */
// My output results when pushing reload was: Finished generating 1000000 numbers, this is the speed of your computer when loading synchronous-based applications!


//Here is an example of an asynchronous code using event handlers.

const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}This is your computer speed when visiting an asynchronous-based application! Asynchronous rocks! Generated Number:${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Generating\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
//My output results when generating speed was: Generating This is your computer speed when visiting an asynchronous-based application! Asynchronous rocks! Generated Number:200

/* Below is an example of a synchronous code while using callbacks

function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
*/