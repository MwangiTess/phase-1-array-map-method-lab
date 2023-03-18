const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



/*const titleCased = tutorials.map(() => {
  const arr = tutorials.split(" ");

  for(let i=0; i<arr.lenght; i++){
    arr[i] = arr[i].charAt(0).toUppercase() + arr[i].slice(1);
  }
  const tutorial = arr.map.join("");
  //return tutorial


titleCased();*/

/*const titleCased = tutorials.map(function(tutorial) {
  const titleCaseTutorial = tutorial.split(' ')
  .map(function(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join(' ');
  return titleCaseTutorial;
  });
  
  console.log(titleCased);
  
  // Output:
  // [
  //   'What Does The This Keyword Mean?',
  //   'What Is The Constructor OO Pattern?',
  //   'Implementing Blockchain Web API',
  //   'The Test Driven Development Workflow',
  //   'What Is NaN And How Can We Check For It',
  //   'What Is The Difference Between StopPropagation And PreventDefault?',
  //   'Immutable State And Pure Functions',
  //   'What Is The Difference Between == And ===?',
  //   'What Is The Difference Between Event Capturing And Bubbling?',
  //   'What Is JSONP?'
  // */

  function titleCased() {
    return tutorials.map(function(title) {
    let words = title.split(' ');
    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
    });
    }
    
    // Example usage:
    console.log(titleCased());
    // Output:
    // [
    //   "What Does The This Keyword Mean?",
    //   "What Is The Constructor OO Pattern?",
    //   "Implementing Blockchain Web API",
    //   "The Test Driven Development Workflow",
    //   "What Is NaN And How Can We Check For It",
    //   "What Is The Difference Between StopPropagation And PreventDefault?",
    //   "Immutable State And Pure Functions",
    //   "What Is The Difference Between == And ===?",
    //   "What Is The Difference Between Event Capturing And Bubbling?",
    //   "What Is JSONP?"
    // 
