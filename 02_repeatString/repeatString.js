function repeatString(inputString, number){
    let result = "";
    if (number <0){
        return "ERROR";
    } else {
    for(let i=0; i<number; i++){
    result += inputString;
    }
    return result;
    }
}

// Do not edit below this line
module.exports = repeatString;
