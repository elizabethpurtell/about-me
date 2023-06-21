`use strict`;

console.log('hey world, hey');

// ToDo: Ask the user their name through a prompt()

let userName = prompt('What is your name?');

// Display that name back to the user through a custom greeting welcoming them to your site.

alert(`Welcome to my site ${userName}! Let's play a guessing game, please answer yes/no OR y/n`);

// todo: Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('You are correct!');
} else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Sorry you are wrong, I have a daughter');
}

let questionTwoGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
  alert('You are correct!');
} else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  alert('Sorry you are wrong, I have a daughter');
}

let questionThreeGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionThreeGuess === 'y' || questionThreeGuess === 'yes'){
  alert('You are correct!');
} else if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  alert('Sorry you are wrong, I have a daughter');
}

let questionFourGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
  alert('You are correct!');
} else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
  alert('Sorry you are wrong, I have a daughter');
}

let questionFiveGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
  alert('You are correct!');
} else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
  alert('Sorry you are wrong, I have a daughter');
}



// todo: Display the user’s name back to them in your final message to the user. Ask the user their name through a prompt()










