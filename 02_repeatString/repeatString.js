const repeatString = function(string, num) {

    let newString = [];
    let returnPhrase = '';

    if (num >= 0 && string != '') {

            for(let i = 0; i < num; i++) {
                    newString.push(string);
                }

                returnPhrase = newString.join('');

    } else if (num < 0) {

        returnPhrase = 'ERROR';

    } else {

        returnPhrase = '';

    }

    return returnPhrase;
};

// Do not edit below this line
module.exports = repeatString;
