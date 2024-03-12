
const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear(); // Get the current year
  
    // Calc age of each person, considering if they are still alive
    const age = arr.map(person => ((person.yearOfDeath || currentYear) - person.yearOfBirth));
  
    // Find the maximum age
    const maxAge = age.reduce((max, personAge) => personAge > max ? personAge : max, 0);
  
    // Find the person(s) with the maximum age
    const oldestPeople = arr.filter(person => ((person.yearOfDeath || currentYear) - person.yearOfBirth) === maxAge);
    
    // Assuming you want to return just one person, not all oldest (if there are multiple)
    console.log(oldestPeople);
    return oldestPeople[0]; // This will return the first person in the case of a tie
  };


// Do not edit below this line
module.exports = findTheOldest;
