// Write Code Here   
// Global Scope     
let input = 'The Quick Brown Fox';

// Functional Scope
function sentence(input) {
    let words = input.split(' ');
    let mySentence = '';
    
    // Block Scope
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        mySentence += word.charAt(0).toLowerCase() + word.slice(1).toUpperCase() + ' ';
    }
    return mySentence ;
}
console.log(sentence(input));