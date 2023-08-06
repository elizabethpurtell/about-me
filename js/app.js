'use strict';


let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);

let counterCorrect = 0;

let questionOneGuess = prompt('Am I an Artist?').toLowerCase();

if (questionOneGuess === 'y' || questionOneGuess === 'yes') {
  alert('You are correct!');
  counterCorrect += 1;
} else if (questionOneGuess === 'n' || questionOneGuess === 'no') {
  alert('Sorry you are wrong, I have been an Artist for over 20 years');
}

let questionTwoGuess = prompt('Do I spend a lot of time learning new things?').toLowerCase();

if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {
  alert('You are correct!');
  counterCorrect += 1;
} else if (questionTwoGuess === 'n' || questionTwoGuess === 'no') {
  alert('Sorry you are wrong, I consider myself a Lifetime Learner and love to explore!');
}

let questionThreeGuess = prompt('Have I ever worked as a nurse?').toLowerCase();

if (questionThreeGuess === 'y' || questionThreeGuess === 'yes') {
  alert('You are correct!');
  counterCorrect += 1;
} else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {
  alert('Sorry you are wrong, I worked for many years in healthcare to pay my way through college.');
}

let questionFourGuess = prompt('Did I complete a bachelors degree in my 40s?').toLowerCase();

if (questionFourGuess === 'y' || questionFourGuess === 'yes') {
  alert('You are correct!');
  counterCorrect += 1;
} else if (questionFourGuess === 'n' || questionFourGuess === 'no') {
  alert('Sorry you are wrong, I went back to University after age 40 and completed my Bachelors in Design at age 44!');
}

let questionFiveGuess = prompt('Will I complete another degree before 50?').toLowerCase();

if (questionFiveGuess === 'y' || questionFiveGuess === 'yes') {
  alert('You are correct!');
  counterCorrect += 1;
} else if (questionFiveGuess === 'n' || questionFiveGuess === 'no') {
  alert('Sorry you are wrong, I plan to complete a Masters degree by age 50!');
}


let timesWatchedSW = 890;
let maxGuesses = 4;
let correctGuess = false;
let questionSix = 0;
let userGuess = ('Guess the number of times I have watched Star Wars Episode VI?');

questionSix = prompt(userGuess);

while (maxGuesses > 0 && correctGuess === false) {
  console.log(`question6 is ${questionSix} is type value ${typeof questionSix}`);
  maxGuesses--;
  if (isNaN(questionSix)) {
    alert(`You must enter a number, please try again. You have ${maxGuesses} guesses remaining`);
  } else if (parseInt(questionSix) < timesWatchedSW) {
    alert(`Guess is too low, try again! You have ${maxGuesses} guesses remaining`);
  } else if (parseInt(questionSix) > timesWatchedSW) {
    alert(`Guess is too high, try again! You have ${maxGuesses} guesses remaining`);
  }
  else if (parseInt(questionSix) === timesWatchedSW) {
    alert('Great Guess! You are correct!');
    correctGuess = true;
    counterCorrect += 1;
  } else {
    continue;
  }

  if (maxGuesses === 0 && correctGuess === false) {
    alert(`You've run out of guesses. The actual answer was ${timesWatchedSW} `);
  }
  if (maxGuesses > 0 && correctGuess === false) {
    questionSix = prompt(userGuess);
  }


}


let userQuestion = 'What is my favorite color?';
let favColors = ['blue', 'teal', 'periwinkle', 'cornflower'];
let attempts = 6;
let correct = false;

while (attempts && correct === false) {
  let favColorGuess = prompt(userQuestion);
  attempts--;

  for (let i = 0; i < favColors.length; i++) {
    if (favColorGuess === favColors[i]) {
      alert('Great job guessing my favorite color!!');
      counterCorrect += 1;
      correct = true;
      attempts = 0;
      break;
    }
  }
  if (correct === false) {
    alert(`Wrong, Try again! You have ${attempts} attempts remaining`);
    // alert(`You have ${attempts} attempts remaining`);
  }
}

alert(`Here are all my favorite colors: ${favColors}`);

alert(`Fabulous! ${userName}, you answered ${counterCorrect} out of 7 correctly!`);

alert(`Thank you for answering my questions ${userName}! Please have a look-see through my About Me page to learn more about me!`);
