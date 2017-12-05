'use strict';

var nice = prompt('Does Ryan seem like a nice guy?');
nice.toUpperCase()
console.log('niceness:', nice);

if (nice === 'YES' || nice === 'Y' || nice === 'Yes') {
  alert ('You are Correct!');
}
else if (nice === 'NO' || nice === 'N') {
  alert ('Incorrect, Ryan is a nice guy!');
} else {
  alert ('I dont recognize this response!');
}

var pet = prompt('Does Ryan own a pet?');
console.log('pet:', pet);

if (pet === 'YES' || pet === 'Y') {
  alert ('You are Incorrect, Ryan does not own a pet.');
}
else if (pet === 'NO' || pet === 'N') {
  alert ('Correct, sadly Ryan does not own a pet');
} else {
  alert ('I dont recognize this response!');
}

var siblings = prompt('Does Ryan have any siblings?');
console.log('siblings:', siblings);

if (siblings === 'YES' || siblings === 'Y') {
  alert ('You are Correct!')
}
else if (siblings === 'NO' || siblings === 'N') {
  alert ('Incorrect, Ryan has two siblings');
} else {
  alert ('I dont recognize this response!');
}
