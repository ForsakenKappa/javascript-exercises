const palindromes = function(text = '') {

    text = text.replace(/\W/g, '').toLowerCase();

    reversedText = '';

    for (let i = text.length; i > 0; i--){
        reversedText += text.charAt(i-1)
    }

    return text === reversedText

};

// Do not edit below this line
module.exports = palindromes;
