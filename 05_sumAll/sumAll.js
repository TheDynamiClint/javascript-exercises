const sumAll = function(numOne, numTwo) {

    let answer;
    
    function getSum(n){
        let number = (n * (n + 1))/2;
        return number;
        }
    
    /*if(isNaN(numOne) || isNaN(numTwo)|| Array.isArray(numOne) || Array.isArray(numTwo)
        || numOne < 0 || numTwo < 0) {*/

    if(typeof numOne !== "number" || typeof numTwo !== "number" || numOne < 0 || numTwo < 0) {

        answer = "ERROR";
        } else {
            let a = getSum(numOne);
            let b = getSum(numTwo); 
            let c;
    
            if (Math.min(a,b) == 1) {
                c = 1;
            } else {
                c = 0;
                }
        
        answer = Math.abs(Math.max(a,b) - Math.min(a,b) + c);
    }
    return answer;
    }  

// Do not edit below this line
module.exports = sumAll;
