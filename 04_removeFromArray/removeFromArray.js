const removeFromArray = function(array = [], ...itemsToRemove) {

    return array.filter((item) => {
        for (let i = 0; i < itemsToRemove.length; i++){
            if (item === itemsToRemove[i]) return false
        }
        return true
    })

};

// Do not edit below this line
module.exports = removeFromArray;
