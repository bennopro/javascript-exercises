const fibonacci = function(a) {
    if(a===0 || a==="0"){
        return 0;
    }
    if(a<0){
        return "OOPS";
    }
    let array =[1,1];
    for(let i=3; i<=a;i++){
        let newValue = array[i-3]+array[i-2];
        array.push(newValue);
     }
    return array[a-1];
};
console.log(fibonacci(10))

// Do not edit below this line
module.exports = fibonacci;
