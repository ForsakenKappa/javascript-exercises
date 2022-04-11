const removeFromArray = function(array = [], ...itemsToRemove) {

    return array.filter((item) => {
        for (let i = 0; i < itemsToRemove.length; i++)
        return !(item === itemsToRemove[i])
    })

};

// Do not edit below this line
module.exports = removeFromArray;
