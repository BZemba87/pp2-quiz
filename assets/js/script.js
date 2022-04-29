let  question = {
    title:  'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

//*1. select DOM element
let titleDiv = document.getElementById('title');

//*2. modify it
titleDiv.textContent = question.title;
