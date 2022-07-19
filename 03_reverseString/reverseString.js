const reverseString = function(word) {

    let drow = '';

    if  (word == '') {

        drow = '';

    } else {

        wordArray = [];

        for (i = 0; i < word.length; i++) {
            let inputChar = word[i];
            wordArray.push(inputChar);
        }

        wordArray = wordArray.reverse();
        drow = wordArray.join('');

    }

    return drow;
};

// Do not edit below this line
module.exports = reverseString;
