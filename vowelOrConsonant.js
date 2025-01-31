const letter=prompt('Enter a letter to check if it is a vowel or consonant:');

let smallLetter=letter.toLowerCase();

switch(smallLetter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("This is a vowel.");
        break;
    default:
        console.log("This is a consonant.")
}