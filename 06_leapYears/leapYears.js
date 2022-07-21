/* Create a function that determines whether or not a given year is a leap year. 
Leap years are determined by the following rules:
- Leap years are years divisible by four (like 1984 and 2004). 
- Years divisible by 100 are not leap years (such as 1800 and 1900) 
  unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).*/

const leapYears = function(year) {

    let n = year;
    let tf;
    
    if (n % 100 === 0 && n % 400 !== 0) {
    
        tf =  false;
    
    } else if (n % 4 !== 0) {
    
        tf =  false;
        
    } else {
    
        tf = true;
    
    }
    
    return tf;
};

// Do not edit below this line
module.exports = leapYears;
