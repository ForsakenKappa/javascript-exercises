const fibonacci = function(num) {

    seq = [1,1];

    if (num < 0) return "OOPS"

    for (let i = 0; i < num; i++){
        seq.push(seq[i] + seq[i+1])
    }

    return seq[num-1]
    
};

// Do not edit below this line
module.exports = fibonacci;
