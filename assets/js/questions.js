// question variable hold multiples choice question for the Quiz
let questions = [
  {
    title: 'What is the correct way to call the random method on the Math global object?',
    choices: [
      '1. random.Math()', 
      '2. Math(randon)', 
      '3. Math.random()', 
      '4. math.random()'
    ],
    answer: '3. Math.random()'
  },
  {
    title: 'What is the outcome of the following code snippet? => console.log(\'Hello world\');',
    choices: [
      '1. log(\'Hello world\') is printed to the console', 
      '2. \'Hello world\' is printed to the console with single quatation marks',
      '3. Hello world is stored as a variable',
      '4. Hello world is printed to the console'
    ],
    answer: '4. Hello world is printed to the console'
  },
  {
    title: 'What is the correct way to call a string’s built-in method?',
    choices: [
      "1. toUpperCase('str')",
      "2. 'str'.toUpperCase()",
      "3. toUpperCase.'str'()",
      "4. 'str'.toUpperCase"
    ],
    answer: "2. 'str'.toUpperCase()"
  },
  {
    title: "What is the outcome of this statement? => console.log('hi!'.length);",
    choices: [
      "1. hi! is printed to the console",
      "2. 3 is printed to the console",
      "3. 'hi!'.length will be printed to the console",
      "4. 1 is printed to the console"
    ],
    answer: "2. 3 is printed to the console"
  },
  {
    title: "Which of the following is an example of a single line comment?",
    choices: [
      "1. // Is this a comment?",
      "2. console.log()",
      "3. console.log('Is this a comment?');",
      "4. 'Is this a comment?"
    ],
    answer: "1. // Is this a comment?"
  },
  {
    title: "What will the following code print to the console? => let num = 10;\nnum *= 3;\nconsole.log(num);",
    choices: [
      "1. 3",
      "2. 'num'",
      "3. 30",
      "4. 10"
    ],
    answer: "3. 30"
  },
  {
    title: "What is the correct way to declare a new variable that you can change?",
    choices: [
      "1. var myName = 'Sloan'",
      "2. myName = 'Sloan'",
      "3. let myName: 'Sloan'",
      "4. const myName = 'Sloan'"
    ],
    answer: "3. let myName = 'Sloan'"
  }
]