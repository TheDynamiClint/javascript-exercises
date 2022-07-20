const removeFromArray = function(args) {
    
    //grab the first index value, which should be the input array
    let valuesArray = [];
    valuesArray = arguments[0];

    //place remaining index values into a second array
    let charsToRemove = [];
    for (let i = 1; i < arguments.length; i++) {
        charsToRemove[i-1] = arguments[i];
    }
    
    //loop through charsToRemove and remove those values from args array
    let filtered = [];
        
    for (let i = 0; i < charsToRemove.length; i++) {
        valuesArray = valuesArray.filter(function(value, charToRemove) {
        return value !== charsToRemove[i];
        });
        }
    
    return valuesArray;
};

// Do not edit below this line
module.exports = removeFromArray;
