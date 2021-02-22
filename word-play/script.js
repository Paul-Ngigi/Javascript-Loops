function createSentence(){
    let sentence = prompt("Create a sentence");
    sentence = sentence.split(' ');
    console.log(sentence);
    let result = sentence.filter(sentence => sentence.length > 3)
    console.log(result);
    
    finalString = result.join(" ");
    console.log(finalString);
};
createSentence();