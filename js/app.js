'use strict';


// Ask user their name
// Display that name back to the user through a custom greeting welcoming them to your site.
// console.log(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);

let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);

// Create a global variable to add all the correct guesses to questions, then give an overall response at the end with how many answers they guessed correctly.
// Add the counterCorrect variable after the statement of guessing correctly. ( use: counterCorrect++; )

let counterCorrect = 0;

// Question 1: Ask user 5 yes/no questions

let questionOneGuess = prompt('Am I an Artist?').toLowerCase();

if (questionOneGuess === 'y' || questionOneGuess === 'yes') {
  alert('You are correct!');
  counterCorrect += 1; // this counter will add all the correct answers
  // console.log('You are correct!');
} else if (questionOneGuess === 'n' || questionOneGuess === 'no') {
  alert('Sorry you are wrong, I have been an Artist for over 20 years');
  // console.log('Sorry you are wrong, I have been an Artist for over 20 years');
}

let questionTwoGuess = prompt('Do I spend a lot of time learning new things?').toLowerCase();

if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {
  alert('You are correct!');
  counterCorrect += 1; // this counter will add all the correct answers
  // console.log('You are correct!');
} else if (questionTwoGuess === 'n' || questionTwoGuess === 'no') {
  alert('Sorry you are wrong, I consider myself a Lifetime Learner and love to explore!');
  // console.log('Sorry you are wrong, I consider myself a Lifetime Learner and love to explore!');
}

let questionThreeGuess = prompt('Have I ever worked as a nurse?').toLowerCase();

if (questionThreeGuess === 'y' || questionThreeGuess === 'yes') {
  alert('You are correct!');
  counterCorrect += 1;
  // console.log('You are correct!');
} else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {
  alert('Sorry you are wrong, I worked for many years in healthcare to pay my way through college.');
  // console.log('Sorry you are wrong, I worked for many years in healthcare to pay my way through college.');
}

let questionFourGuess = prompt('Did I complete a bachelors degree in my 40s?').toLowerCase();

if (questionFourGuess === 'y' || questionFourGuess === 'yes') {
  alert('You are correct!');
  counterCorrect += 1;
  // console.log('You are correct!');
} else if (questionFourGuess === 'n' || questionFourGuess === 'no') {
  alert('Sorry you are wrong, I went back to University after age 40 and completed my Bachelors in Design at age 44!');
  // console.log('Sorry you are wrong, I went back to University after age 40 and completed my Bachelors in Design at age 44!');
}

let questionFiveGuess = prompt('Will I complete another degree before 50?').toLowerCase();

if (questionFiveGuess === 'y' || questionFiveGuess === 'yes') {
  alert('You are correct!');
  counterCorrect += 1;
  // console.log('You are correct!');
} else if (questionFiveGuess === 'n' || questionFiveGuess === 'no') {
  alert('Sorry you are wrong, I plan to complete a Masters degree by age 50!');
  // console.log('Sorry you are wrong, I plan to complete a Masters degree by age 50!');
}

// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// 1. Users will guess four times.
// 2. response of too high/too low for each input.
// 3. response for correct answer
// 4. response when used up 4 tries, giving the answer.
// making a counter for correct guesses: set a variable, make it = 0, which we want to increment by one for each correct answer from all the questions
// scoping

let userGuess = 'Guess the number of times I have watched Star Wars Episode VI?';
let timesWatchedSW = 890;
let maxGuesses = 4;
let correctGuess = false;
let questionSix;

while (maxGuesses > 0 && correctGuess === false) {
  if (maxGuesses === 4) {
    questionSix = prompt(userGuess);
  } else if (questionSix === '890') {
    alert('Great Guess! You are correct!');
    correctGuess = true; // breaks the while loop
    counterCorrect += 1; // this counter will add all the correct answers
  } else if (questionSix < 890) {
    questionSix = prompt('Guess is too low, try again!');
  } else if (questionSix > 890) {
    questionSix = prompt('Guess is too high, try again!');
  }
  maxGuesses--;
}

// if maxGuesses is reached, then return a alert that they are out of chances along with the actual number

if (maxGuesses === 0) {
  alert(`You've run out of guesses. The actual answer was ${timesWatchedSW}`);
}

// Question 7:
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.

let userQuestion = 'What is my favorite color?';
let favColors = ['blue', 'teal', 'periwinkle', 'cornflower'];

for (let attempts = 6; attempts > 0; attempts--) {
  let favColorGuess = prompt(userQuestion);


  for (let i = 0; i < favColors.length; i++) {
    if (favColorGuess === favColors[i]) {
      alert('Great job guessing my favorite color!!');
      counterCorrect += 1; // this counter will add all the correct answers
      attempts = 0;
      break;
    }
    for (let i = 0; i < favColors.length; i++) {
      if (favColorGuess !== favColors[i]) {
        alert('Wrong, Try again!');
        prompt('What is my favorite color?');
        attempts = 0;
        // } else if(prompt('What is my favorite color?)){

      }
    }
  }
  // need to use this alert if they didn't guess any correct colors. If all attempts are used but no correct answer then:
  alert(`Here are all my favorite colors: ${favColors}`);
}

// Display the data received from the counterCorrect with an alert to the user about how many answers were correct.
alert(`Fabulous! ${userName}, you answered ${counterCorrect} out of 7 correctly!`);
// console.log(`Fabulous! ${userName}, you answered ${counterCorrect} out of 7 correctly!`);

// Display users name back to them in a final message

// console.log(`Thank you for answering my questions ${userName}! Please have a look-see through my About Me page to learn more about me!`);

alert(`Thank you for answering my questions ${userName}! Please have a look-see through my About Me page to learn more about me!`);
