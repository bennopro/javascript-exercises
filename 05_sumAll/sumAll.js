function sumAll(inputA, inputB){
    let finalSum = 0;
    if (inputA <0 || inputB <0 || typeof inputA !== "number" || typeof inputB !== "number"){
        return "ERROR";
    }
    if(inputA>inputB){
        for(let i=inputB; i<=inputA; i++){
            finalSum += i;
        }
        return finalSum;
    } else if (inputA<inputB){
        for(let i=inputA; i<=inputB; i++){
            finalSum += i;
        }
        return finalSum;
    } 
    }
    
// Do not edit below this line
module.exports = sumAll;
