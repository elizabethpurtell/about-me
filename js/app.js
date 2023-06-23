'use strict';

// console.log('hey world hey!');

// Ask user their name

let userName = prompt('What is your name?');

// Display that name back to the user through a custom greeting welcoming them to your site.

// console.log(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);

alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);

// Ask user 5 yes/no questions

let questionOneGuess = prompt('Am I an Artist?').toLowerCase();

if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('You are correct!');
  // console.log('You are correct!');
} else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Sorry you are wrong, I have been an Artist for over 20 years');
  // console.log('Sorry you are wrong, I have been an Artist for over 20 years');
}

let questionTwoGuess = prompt('Do I spend a lot of time learning new things?').toLowerCase();

if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
  alert('You are correct!');
// console.log('You are correct!');
} else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  alert('Sorry you are wrong, I consider myself a Lifetime Learner and love to explore!');
// console.log('Sorry you are wrong, I consider myself a Lifetime Learner and love to explore!');
}

let questionThreeGuess = prompt('Have I ever worked as a nurse?').toLowerCase();

if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
  alert('You are correct!');
// console.log('You are correct!');
} else if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  alert('Sorry you are wrong, I worked for many years in healthcare to pay my way through college.');
// console.log('Sorry you are wrong, I worked for many years in healthcare to pay my way through college.');
}

let questionFourGuess = prompt('Did I complete a bachelors degree in my 40s?').toLowerCase();

if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
  alert('You are correct!');
// console.log('You are correct!');
} else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
  alert('Sorry you are wrong, I went back to University after age 40 and completed my Bachelors in Design at age 44!');
// console.log('Sorry you are wrong, I went back to University after age 40 and completed my Bachelors in Design at age 44!');
}

let questionFiveGuess = prompt('Will I complete another degree before 50?').toLowerCase();

if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
  alert('You are correct!');
  // console.log('You are correct!');
} else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
  alert('Sorry you are wrong, I plan to complete a Masters degree by age 50!');
// console.log('Sorry you are wrong, I plan to complete a Masters degree by age 50!');
}

// Display users name back to them in a final message

// console.log(`Thank you for answering my questions ${userName}! Please have a look-see through my About Me page to learn more about me!`);

alert(`Thank you for answering my questions ${userName}! Please have a look-see through my About Me page to learn more about me!`);
