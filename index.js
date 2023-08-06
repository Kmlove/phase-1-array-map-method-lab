const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  const modifiedArray = tutorials.map((sentence) => {
    let newSentence = "";

    for (let i = 0; i < sentence.length; i++) {
      let letter = sentence[i];

      if (i === 0) {
        letter = letter.toUpperCase();
        newSentence += letter;
      } else if (sentence[i - 1] === " ") {
        letter = letter.toUpperCase();
        newSentence += letter;
      } else {
        newSentence += letter;
      }
    }

    return newSentence
  });

  return modifiedArray;
};
