const getTheTitles = function(books) {
    
    titles = []

    books.forEach(element => {
        titles.push(element.title)
    });

    return titles
}
// Do not edit below this line
module.exports = getTheTitles;
