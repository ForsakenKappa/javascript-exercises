const sumAll = function(numStart, numEnd) {

    if ( !(typeof numEnd === 'number') || !(typeof numStart === 'number')) return "ERROR"
    if ( numEnd < 0 || numStart < 0) return "ERROR"

    if (numStart > numEnd) {
        a = numEnd;
        b = numStart;
    }
    else{
        a = numStart;
        b = numEnd;
    }

    sum = 0;

    for (let i = a; i <= b; i++){
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
