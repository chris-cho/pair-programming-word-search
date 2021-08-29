const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = letters[0].map((_, index) => letters.map(row => row[index]));
    for (l of verticalJoin) {
        if (l.join('').includes(word)) return true
    }
    return false;
}

module.exports = wordSearch;