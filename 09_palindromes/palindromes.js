const palindromes = function (string) {
    // clean string from spaces, commas and dots.
    let stringWithoutCommas = string.toLowerCase().replace(/[ ,.!]/g, '');
    console.log(stringWithoutCommas);
    // turn string into array
    let stringArray = stringWithoutCommas.split('');
    console.log(stringArray);
    let reversedArray = stringArray.reverse();
    console.log(reversedArray);
    let reversedString = reversedArray.join("");
    console.log(reversedString);
    console.log(typeof string);
    console.log(typeof reversedString);
    // check if string is equal to reversed sorted array
    if(stringWithoutCommas === reversedString){
        return true;
    } return false;
};

// Do not edit below this line
module.exports = palindromes;
